import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';
import { products } from './src/data/products';

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Initialize Gemini API Client lazily
let ai: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn('GEMINI_API_KEY environment variable is not defined. AI Assistant will operate in simulation mode.');
    }
    ai = new GoogleGenAI({
      apiKey: apiKey || 'dummy-key',
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return ai;
}

// API: Get products catalog
app.get('/api/products', (req, res) => {
  res.json(products);
});

// API: Handle Gemini Chat with Sourcing Assistant
app.post('/api/gemini/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      res.status(400).json({ error: 'Invalid messages body. Must be an array.' });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    
    // System Instruction for Jiyama-Bot
    const systemInstruction = `You are Jiyama-Bot, the expert Chemical Procurement & Catalyst Matching AI Assistant for Jiyama Finechem LLP (located in Udaipur, Rajasthan, India. Contact: +91-8918588147, Email: info@jiyamatradelinks.com).

Jiyama Finechem LLP specializes in high-purity industrial grade compounds, serving specialty chemicals, active pharmaceutical ingredients (APIs), and customized chemical sourcing solutions. They provide high-quality lab grade chemicals for global researchers and industrial manufacturers.
The company was founded by chemical industry veterans and procurement experts with 20+ years of deep industry experience.

Here is Jiyama Finechem LLP's product catalog context for you to refer to when recommending solutions:
1. Precious Metal Catalysts (Wet/Dry formats):
   - Palladium on Carbon (0.5%, 1%, 2%, 5%, 10%, 20% Pd/C)
   - Lindlar Catalyst (5% Pd + 5% Pb on CaCO3)
   - Platinum on Carbon (1%, 5% Pt/C, also sulphited, and vanadium/copper co-catalysts)
   - Rhodium on Carbon (3%, 5%, 10% Rh/C, Rh/Al2O3)
   - Ruthenium on Carbon (3%, 5%, 10% Ru/C, Ru/Al2O3)
   - Fixed Bed Catalysts (Pd/Alumina Sphere, Pd/C Coconut Flakes, Pt/Alumina)
2. Raney Type Nickel Catalysts (HAC: Highly Active Catalyst, HRC: Highly Recyclable Catalyst):
   - MCT 1019 (HAC): Nitro to Amino, Oxime to Amine reduction. e.g. Lisinopril, Mepyramine, Mesalazine. Low dehydrogenation.
   - MCT 1061 (HAC): Aldehyde to Alcohol reduction e.g. Sorbitol.
   - MCT 1038 (HAC): Ring Hydrogenation, Debenzylation e.g. Pyridine to Pyrimidine, Donepezil.
   - MCT 1040 (HAC): Nitrile to primary amine reduction. Highly recyclable. e.g. Venlafaxine, Atorvastatin.
   - MCT 1080 (HRC): General Nitro to Amine reduction. Highly recyclable.
   - MCT 1030 (HAC): Nitro to Amine, Keto to Alcohol.
   - MCT 1010 (HAC): High Nickel content.
3. Precious Metal Salts & Chemicals:
   - Palladium Sponge (CAS 7440-05-3), Palladium Acetate (CAS 3375-31-3), Palladium Chloride (CAS 7647-10-1), Palladium Oxide (CAS 64109-12-2), Palladium Nitrate (CAS 10102-05-3)
   - Bis(triphenylphosphine)palladium(II) dichloride (CAS 13965-03-2)
   - Tetrakis(triphenylphosphine)palladium(0) (CAS 14221-01-3)
   - Palladium acetylacetonate (CAS 14024-61-4), Palladium black (CAS 7440-05-3)
   - Bis(dibenzylideneacetone)palladium(0) [Pd(dba)2] (CAS 32005-36-0), Pd2(dba)3 (CAS 51364-51-3)
   - [1,1'-Bis(diphenylphosphino)ferrocene]dichloropalladium(II) (CAS 72287-26-4)
   - Bis(tri-tert-butylphosphine)palladium(0) (CAS 53199-31-8), Dichlorobis(tricyclohexylphosphine)palladium(II) (CAS 29934-17-6)
   - Platinum Sponge (CAS 7440-06-4), Karstedt's Catalyst (CAS 68478-92-2), Adam's Catalyst (CAS 1314-15-4)
   - Ruthenium (III) Chloride (CAS 10049-08-8), Ruthenium Sponge (CAS 7440-18-8), Ru(OAc)2(BINAP) (CAS 325146-81-4)
   - Rhodium Sponge (CAS 7440-16-6), Rhodium (III) Chloride (CAS 10049-07-7), Rh(II) Acetate Dimer (CAS 15956-28-2)
   - Silver Sponge (CAS 7440-22-4), Silver (I) Nitrate (CAS 7761-88-8)
4. Commercial & Specialty Products:
   - 1,2 Pentanediol (CAS 5343-92-0, Cosmetics humectant/preservative booster)
   - Selenium Sulphate (CAS 7488-56-4, Cosmetics/anti-dandruff/treatment)
   - Methyl Mercaptan (CAS 74-93-1, Agrochemical intermediate)
   - 4-Acetyl benzonitrile (CAS 1443-80-7, Antifungal Ravuconazole intermediate)
   - Benzyl mercaptan (CAS 100-53-8, Pharmaceuticals building block)
   - 1,3 Dichloro acetone (CAS 534-07-6, Pharmaceuticals building block)
   - 2-Chloro-5-Nitrobenzoic Acid (2,5-CNBA, CAS 2516-96-3, agrochemicals, herbicide BUTAFENACIL, anti-diarrheal)
   - 2-Acetyl Thiophene (T2AC, CAS 88-15-3, pharma intermediate for Tiamonium Iodide, Suprofan, Stepronin, Duloxetine, Tuloxetine)
   - Thiophene-2-Carboxaldehyde (T2A, CAS 98-03-3, intermediate for Eprosartan, Ethaboxam, Teniposide, Temocapril)
   - 4-Amino Pyridine (4-AP, CAS 504-24-5, intermediate for Fampyridine, Pinacidil, DMAP, Torasemide, Domperidone)
   - 3-bromobenzoic acid (CAS 585-76-2, organic synthesis building block)
   - 3-bromobenzoic acid tert-butyl ester (CAS 135332-94-6, ester intermediate)
   - 2-bromo aniline (CAS 576-17-0, pharmaceutical intermediate)
   - 2-bromo iodobenzene (CAS 583-55-1, specialty synthesis compound)
   - 2-Iodobenzoic Acid (CAS 88-67-5), Diiodomethane (CAS 2595-53-8)

5. Scientific & Technical Services Division:
   - Product purification custom synthesis & manufacturing: recrystallisation, fractional distillation, isomer isolation.
   - Product development: mg bench scale to continuous pilot/ton scale pathway development.
   - Hydrogenation reduction capability: high pressure Parr shaker/autoclave systems.
   - Pharma & Chemical Consultancy: catalyst optimization, metal reclaiming / recycling.

Your Guidelines:
- Act as an incredibly knowledgeable, professional, and courteous chemical sourcing & catalyst matching assistant.
- Answer technical queries using correct chemical names and reaction terms.
- Highlight Jiyama Finechem LLP's dual segments: "Products segment" (catalog chemicals, reagents, and commercial intermediates) and "Services segment" (purification, custom synthesis, product development, hydrogenation, and technical consultancy).
- Proactively speak about our scientist-to-scientist ethos ("We understand the pain of a scientist, outsourcing synthesis to us").
- Emphasize Jiyama's timing guarantees: **Faster Chemical Delivery** (leveraging express air freight partnerships and automated customs routing) and **Maximum R&D ROI Guarantee** (securing timelines, avoiding idle laboratory labor, and maximizing the returns on your research investments).
- Highlight Jiyama Finechem LLP's unique edge: high purity, deep custom sourcing network, Udaipur-based warehousing, quick global shipping, and expert-backed procurement solutions.
- If a user mentions a synthetic transformation (e.g. "converting ring nitrogens" or "nitrile to primary amine"), match it to Jiyama's custom Raney Nickel or Precious Metal series!
- If the user asks for a compound NOT currently listed, kindly let them know that Jiyama Finechem LLP has 20+ years of procurement experience and excels in specialized customized chemical sourcing. Encourage them to send a sourcing request via the Custom Sourcing Form or Add products to Inquiry Card to request a quote.
- Maintain a warm, business-professional tone, perfectly suited for B2B procurement managers and university/corporate researchers.
- Format chemical formulas elegantly (e.g. Pd/C, Pd(OAc)2, H2O2).`;

    if (!apiKey) {
      // Simulation mode
      const lastUserMsg = messages[messages.length - 1]?.content || '';
      let simulatedResponse = `Thank you for contacting Jiyama Finechem LLP Sourcing Assistant. Jiyama operates as a scientist-started hub supporting researchers and chemical manufacture in two main divisions:
      
1. **Products segment**: Precious metal catalysts, Raney Nickel (MCT series), and high-purity intermediates across pharmaceutical, agrochemical, cosmetic, and specialty chemicals (such as **3-bromobenzoic acid**, **2-bromo aniline**, etc.).
2. **Services segment**: Bespoke product purification, custom synthesis, product development, hydrogenation reductions, and industry consultancy.

If you are looking for specific compounds or have custom synthetic/purification needs, we stand ready to serve.

Would you like to request an official quote? You can add items to your Inquiry List on the portal, or contact our Udaipur office at **+91-8918588147**!`;

      if (lastUserMsg.toLowerCase().includes('service') || lastUserMsg.toLowerCase().includes('purif') || lastUserMsg.toLowerCase().includes('synthes') || lastUserMsg.toLowerCase().includes('consult')) {
        simulatedResponse = `Through our **Scientific & Technical Services Division**, we provide direct scientist-to-procurement liaison to outsource the synthetic pain points:
- **Product Purification:** We resolve custom crystallisation, distillation, and isomer isolation issues.
- **Custom Synthesis:** Multistep synthesis from milligram to commercial tonnage with strict analytical safety (COA, NMR).
- **Product Development:** Process optimization and process safety pathway advisory.
- **Hydrogenation reduction:** Gaseous high-pressure hydrogenations in hazard-monitored reactors.
- **Pharma & Chemical Consultancy:** Selectivity optimizations and precious metal reclaiming/recycling guidance.

Please send your technical scope of work to **sales@jiyamatradelinks.com** or call Udaipur desk at **+91-8918588147**!`;
      } else if (lastUserMsg.toLowerCase().includes('catalyst') || lastUserMsg.toLowerCase().includes('palladium') || lastUserMsg.toLowerCase().includes('nickel')) {
        simulatedResponse = `As Jiyama Finechem LLP procurement experts, we recommend our specialized high-purity catalysts for your application:
- For selective hydrogenation of nitriles to primary amines, our **MCT 1040 Raney Type Nickel** is highly recyclable and highly active.
- For standard nitro group reductions, our **5% Palladium on Carbon (Pd/C)** or **MCT 1019 Raney Nickel** provides outstanding conversion rates with minimal byproduct formation.
- For alkyne-to-alkene partial reduction, our poisoned **Lindlar Catalyst (5% Pd + 5% Pb on CaCO3)** is fully stocked.

We also offer customized chemical sourcing solutions if you require specific ligand/complex combinations. Please add these to your inquiry list so our procurement team can quote for you!`;
      } else if (lastUserMsg.toLowerCase().includes('contact') || lastUserMsg.toLowerCase().includes('where') || lastUserMsg.toLowerCase().includes('address')) {
        simulatedResponse = `Jiyama Finechem LLP is based in the beautiful city of **Udaipur, Rajasthan, India**. 
Our physical coordinates and contact info:
- **Mobile / WhatsApp:** +91-8918588147
- **Address:** Udaipur, Rajasthan, India
- **Specialization:** High-purity industrial grade compounds, catalysts, active pharmaceutical ingredients (APIs), and specialty chemical custom sourcing solutions.
- **Experience:** 20+ Years in chemical procurement and global logistics.

Feel free to submit a Custom Sourcing request directly from the dashboard, or call us for direct business inquiries!`;
      }

      setTimeout(() => {
        res.json({ text: simulatedResponse });
      }, 400);
      return;
    }

    // Call real Gemini API
    const client = getGeminiClient();
    
    // Convert frontend messages to Gemini API format
    const contents = messages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    const response = await client.models.generateContent({
      model: 'gemini-3.5-flash',
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error('Error with Gemini API:', error);
    res.status(500).json({ 
      error: 'Failed to generate response', 
      details: error.message || error 
    });
  }
});

// Setup Vite or Production build serving
async function start() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Jiyama Finechem LLP Server running on http://0.0.0.0:${PORT}`);
  });
}

start().catch((err) => {
  console.error('Failed to start full stack server:', err);
});
