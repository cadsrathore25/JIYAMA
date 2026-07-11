import { Product } from '../types';

export const products: Product[] = [
  // --- PRECIOUS METAL CATALYSTS (PDF 1) ---
  {
    id: 'pm-pd-1',
    name: '0.5% Palladium on Carbon (Pd/C)',
    category: 'Catalysts',
    subcategory: 'Palladium Catalysts',
    purity: 'High Purity',
    applications: ['Hydrogenation of functional groups', 'Pharmaceutical synthesis', 'Organic fine chemical coupling reactions'],
    uses: 'Widely used in pharmaceutical research and industrial chemical processes for catalytic reduction.'
  },
  {
    id: 'pm-pd-2',
    name: '1% Palladium on Carbon (Pd/C)',
    category: 'Catalysts',
    subcategory: 'Palladium Catalysts',
    purity: 'High Purity',
    applications: ['Deoxygenation', 'Hydrogenolysis of benzyl groups', 'Selective reduction of nitro compounds'],
    uses: 'Key catalyst in API manufacturing and chemical synthesis.'
  },
  {
    id: 'pm-pd-3',
    name: '2% Palladium on Carbon (Pd/C)',
    category: 'Catalysts',
    subcategory: 'Palladium Catalysts',
    purity: 'High Purity',
    applications: ['Reduction of aldehydes and ketones', 'Coupling reactions (Suzuki, Heck)', 'Asymmetric hydrogenation'],
    uses: 'Industrial scale palladium catalyst for organic reactions.'
  },
  {
    id: 'pm-pd-4',
    name: '5% Palladium on Carbon (Pd/C)',
    category: 'Catalysts',
    subcategory: 'Palladium Catalysts',
    purity: 'High Purity',
    applications: ['Double bond reduction', 'De-protection of CBZ and benzyl groups', 'Amine alkylation'],
    uses: 'Standard lab and industrial catalyst for reliable organic reductions.'
  },
  {
    id: 'pm-pd-5',
    name: '10% Palladium on Carbon (Pd/C)',
    category: 'Catalysts',
    subcategory: 'Palladium Catalysts',
    purity: 'High Purity',
    applications: ['Comprehensive hydrogenations', 'Aromatic ring reductions', 'Highly active catalytic coupling'],
    uses: 'Premium high-activity catalyst for advanced chemical research and drug discovery.'
  },
  {
    id: 'pm-pd-6',
    name: 'Lindlar Catalyst (5% Pd + 5% Pb on CaCO3)',
    category: 'Catalysts',
    subcategory: 'Palladium Catalysts',
    purity: 'High Purity',
    applications: ['Selective reduction of alkynes to cis-alkenes', 'Controlled hydrogenation', 'Vitamins & Carotenoids synthesis'],
    uses: 'A classic poisoned catalyst used for partial and stereoselective hydrogenation of triple bonds.'
  },
  {
    id: 'pm-pt-1',
    name: '1% Platinum on Carbon (Pt/C)',
    category: 'Catalysts',
    subcategory: 'Platinum Catalysts',
    purity: 'High Purity',
    applications: ['Selective hydrogenation of nitro compounds to amines', 'Fuel cell applications', 'Dehydrogenation reactions'],
    uses: 'Excellent catalyst for pharmaceutical intermediates where selective nitro reduction is required.'
  },
  {
    id: 'pm-pt-2',
    name: '5% Platinum on Carbon (Pt/C)',
    category: 'Catalysts',
    subcategory: 'Platinum Catalysts',
    purity: 'High Purity',
    applications: ['Hydro-processing', 'Hydrogenation of nitriles to amines', 'Oxidation of alcohols to carboxylic acids'],
    uses: 'Highly active platinum group catalyst with high surface area and dispersion.'
  },
  {
    id: 'pm-rh-1',
    name: '5% Rhodium on Carbon (Rh/C)',
    category: 'Catalysts',
    subcategory: 'Rhodium Catalysts',
    purity: 'High Purity',
    applications: ['Hydrogenation of aromatic rings under mild conditions', 'Reduction of nitriles and oximes', 'Specialty organic synthesis'],
    uses: 'Specialized catalyst for low-pressure ring hydrogenations (e.g., benzene to cyclohexane derivatives).'
  },
  {
    id: 'pm-ru-1',
    name: '5% Ruthenium on Carbon (Ru/C)',
    category: 'Catalysts',
    subcategory: 'Ruthenium Catalysts',
    purity: 'High Purity',
    applications: ['Reduction of carbonyls and aromatic amines', 'Hydrogenation of sugars to polyols', 'Fischer-Tropsch catalyst study'],
    uses: 'Specifically selected for superior performance in aqueous phase hydrogenations and sugar alcohol productions.'
  },

  // --- RANEY TYPE NICKEL CATALYST (PDF 1) ---
  {
    id: 'rn-1019',
    name: 'Raney Type Nickel Catalyst MCT 1019',
    category: 'Catalysts',
    subcategory: 'Raney Nickel Catalysts',
    activity: 'HAC (Highly Active Catalyst)',
    applications: ['Nitro to Amino reduction', 'Oxime to Amine', 'Less dehydrogenation (e.g. Lisinopril, Mepyramine, Mesalazine)'],
    uses: 'Ideal for industrial-scale active pharmaceutical ingredient (API) reductions with minimal byproduct formation.'
  },
  {
    id: 'rn-1061',
    name: 'Raney Type Nickel Catalyst MCT 1061',
    category: 'Catalysts',
    subcategory: 'Raney Nickel Catalysts',
    activity: 'HAC (Highly Active Catalyst)',
    applications: ['Aldehyde to Alcohol reduction (e.g., Sorbitol production from D-glucose)', 'Hydrogenation of sugars'],
    uses: 'High selectivity and performance in industrial polyol production.'
  },
  {
    id: 'rn-1038',
    name: 'Raney Type Nickel Catalyst MCT 1038',
    category: 'Catalysts',
    subcategory: 'Raney Nickel Catalysts',
    activity: 'HAC (Highly Active Catalyst)',
    applications: ['Ring Hydrogenation', 'Debenzylation (e.g., Pyridine to Pyrimidine)', 'Synthesis of Donepezil'],
    uses: 'Specially optimized for nitrogen heterocycle hydrogenation and de-protection.'
  },
  {
    id: 'rn-1040',
    name: 'Raney Type Nickel Catalyst MCT 1040',
    category: 'Catalysts',
    subcategory: 'Raney Nickel Catalysts',
    activity: 'HAC (Highly Active Catalyst)',
    applications: ['Nitrile to Primary Amine reduction (Highly Recyclable)', 'Synthesis of Venlafaxine', 'Synthesis of Atorvastatin (Lipitor)'],
    uses: 'Extremely durable, offering great cycle life and high selectivity for primary amines over secondary/tertiary amines.'
  },
  {
    id: 'rn-1080',
    name: 'Raney Type Nickel Catalyst MCT 1080',
    category: 'Catalysts',
    subcategory: 'Raney Nickel Catalysts',
    activity: 'HRC (Highly Recyclable Catalyst)',
    applications: ['General Nitro to Amine reduction', 'Bulk chemical processing'],
    uses: 'Engineered for maximum recovery and reusability, minimizing heavy metal waste and process costs.'
  },
  {
    id: 'rn-1030',
    name: 'Raney Type Nickel Catalyst MCT 1030',
    category: 'Catalysts',
    subcategory: 'Raney Nickel Catalysts',
    activity: 'HAC (Highly Active Catalyst)',
    applications: ['Nitro to Amine reduction', 'Keto to Alcohol conversion', 'Dual-function processes'],
    uses: 'Versatile grade for multi-step reductions in contract research organization (CRO) laboratories.'
  },
  {
    id: 'rn-1010',
    name: 'Raney Type Nickel Catalyst MCT 1010',
    category: 'Catalysts',
    subcategory: 'Raney Nickel Catalysts',
    activity: 'HAC (Highly Active Catalyst)',
    applications: ['Hydrogenation with High Nickel content requirement', 'High throughput scaling'],
    uses: 'Maximum nickel active density for heavy-duty commercial hydrogenations.'
  },

  // --- PRECIOUS METAL SALTS & CHEMICALS (PDF 1) ---
  {
    id: 'pms-1',
    name: 'Palladium Sponge',
    casNo: '7440-05-3',
    category: 'Precious Metal Salts & Chemicals',
    subcategory: 'Palladium Salts & Complexes',
    purity: '99.95% (Pd Basis)',
    uses: 'Raw material for catalyst manufacturing, high purity electronic pastes, and hydrogen purification.'
  },
  {
    id: 'pms-2',
    name: 'Palladium (II) Acetate',
    casNo: '3375-31-3',
    category: 'Precious Metal Salts & Chemicals',
    subcategory: 'Palladium Salts & Complexes',
    purity: '47.4% Pd (Typical)',
    uses: 'Homogeneous catalyst for Suzuki, Heck, and Stille couplings, carbonylations, and vinylation of aromatic rings.'
  },
  {
    id: 'pms-3',
    name: 'Palladium (II) Chloride',
    casNo: '7647-10-1',
    category: 'Precious Metal Salts & Chemicals',
    subcategory: 'Palladium Salts & Complexes',
    purity: '59.5% Pd (Typical)',
    uses: 'Precursor to a variety of palladium catalysts, carbon monoxide detector manufacturing, and electroplating.'
  },
  {
    id: 'pms-6',
    name: 'Bis(triphenylphosphine)palladium(II) dichloride',
    casNo: '13965-03-2',
    category: 'Precious Metal Salts & Chemicals',
    subcategory: 'Palladium Salts & Complexes',
    purity: '15.2% Pd (Typical)',
    uses: 'Catalyst for Suzuki coupling, Sonogashira coupling, and other cross-coupling reactions.'
  },
  {
    id: 'pms-7',
    name: 'Tetrakis(triphenylphosphine)palladium(0)',
    casNo: '14221-01-3',
    category: 'Precious Metal Salts & Chemicals',
    subcategory: 'Palladium Salts & Complexes',
    purity: '9.2% Pd (Typical)',
    uses: 'Widely used catalyst for palladium-catalyzed cross-coupling reactions like Suzuki-Miyaura, Heck, and Stille.'
  },
  {
    id: 'pms-11',
    name: 'Bis(dibenzylideneacetone)palladium(0) (Pd(dba)2)',
    casNo: '32005-36-0',
    category: 'Precious Metal Salts & Chemicals',
    subcategory: 'Palladium Salts & Complexes',
    uses: 'Common source of soluble Pd(0) for organic synthesis, carbon-nitrogen and carbon-carbon bond forming reactions.'
  },
  {
    id: 'pms-12',
    name: 'Tris(dibenzylideneacetone)dipalladium (Pd2(dba)3)',
    casNo: '51364-51-3',
    category: 'Precious Metal Salts & Chemicals',
    subcategory: 'Palladium Salts & Complexes',
    uses: 'Air-stable soluble source of zero-valent palladium, extensively utilized in Buchwald-Hartwig aminations.'
  },
  {
    id: 'pms-14',
    name: '[1,1\'-Bis(diphenylphosphino)ferrocene]dichloropalladium(II)',
    casNo: '72287-26-4',
    category: 'Precious Metal Salts & Chemicals',
    subcategory: 'Palladium Salts & Complexes',
    uses: 'Premium bidentate ligand palladium complex for Suzuki, Negishi and Stille cross-coupling reactions.'
  },
  {
    id: 'pms-31',
    name: 'Platinum Sponge',
    casNo: '7440-06-4',
    category: 'Precious Metal Salts & Chemicals',
    subcategory: 'Platinum Salts & Complexes',
    purity: '99.9% (Pt Basis)',
    uses: 'Preparation of specialty catalysts, electronic materials, dental alloys, and high-purity laboratory crucibles.'
  },
  {
    id: 'pms-36',
    name: 'Karstedt\'s Catalyst Solution',
    casNo: '68478-92-2',
    category: 'Precious Metal Salts & Chemicals',
    subcategory: 'Platinum Salts & Complexes',
    uses: 'An organoplatinum compound used as an active catalyst for hydrosilylation (silicone curing).'
  },
  {
    id: 'pms-38',
    name: 'Platinum(IV) oxide Anhydrous (Adam\'s Catalyst)',
    casNo: '1314-15-4',
    category: 'Precious Metal Salts & Chemicals',
    subcategory: 'Platinum Salts & Complexes',
    uses: 'Catalyst for hydrogenation of various functional groups and hydrogenolysis reactions in organic synthesis.'
  },
  {
    id: 'pms-40',
    name: 'Ruthenium (III) Chloride',
    casNo: '10049-08-8',
    category: 'Precious Metal Salts & Chemicals',
    subcategory: 'Ruthenium Salts & Complexes',
    uses: 'Precursor for ruthenium catalysts, used in chemical synthesis and manufacturing of anodes for chlor-alkali cells.'
  },
  {
    id: 'pms-51',
    name: 'Rhodium Sponge',
    casNo: '7440-16-6',
    category: 'Precious Metal Salts & Chemicals',
    subcategory: 'Rhodium Salts & Complexes',
    purity: '99.9% (Rh Basis)',
    uses: 'Starting material for organometallic complexes, premium thermocouple wire, and automotive catalytic converters.'
  },
  {
    id: 'pms-54',
    name: 'Silver (I) Nitrate',
    casNo: '7761-88-8',
    category: 'Precious Metal Salts & Chemicals',
    subcategory: 'Silver Salts & Complexes',
    purity: '99.9% (Analytical Grade)',
    uses: 'Common precursor to other silver compounds, medical applications, photography, and analytical chemistry reagents.'
  },

  // --- COMMERCIAL PRODUCTS (PDF 2) ---
  {
    id: 'cp-1',
    name: '1,2-Pentanediol',
    casNo: '5343-92-0',
    category: 'Cosmetic Intermediates',
    subcategory: 'Cosmetics & Personal Care',
    uses: 'Cosmetic ingredient: Outstanding humectant, antimicrobial stabilizer, and skin conditioning agent.',
    molecularFormula: 'C5H12O2',
    molecularWeight: '104.15 g/mol'
  },
  {
    id: 'cp-2',
    name: 'Selenium Sulphate',
    casNo: '7488-56-4',
    category: 'Cosmetic Intermediates',
    subcategory: 'Cosmetics & Personal Care',
    uses: 'Cosmetic intermediate: Widely used in medicated anti-dandruff shampoos and dermatological treatments.',
    molecularFormula: 'SeS2',
    molecularWeight: '143.09 g/mol'
  },
  {
    id: 'cp-3',
    name: 'Methyl Mercaptan',
    casNo: '74-93-1',
    category: 'Agrochemical Intermediates',
    subcategory: 'Agrochemical Intermediates',
    uses: 'Intermediate for the manufacture of methionine, pesticides, and plastics additives.',
    molecularFormula: 'CH4S',
    molecularWeight: '48.11 g/mol'
  },
  {
    id: 'cp-4',
    name: '4-Acetyl benzonitrile',
    casNo: '1443-80-7',
    category: 'Pharmaceutical Intermediates',
    subcategory: 'Pharmaceutical Intermediates',
    uses: 'Key intermediate in the synthesis of Ravuconazole (advanced systemic antifungal agent).',
    molecularFormula: 'C9H7NO',
    molecularWeight: '145.16 g/mol'
  },
  {
    id: 'cp-5',
    name: 'Benzyl mercaptan',
    casNo: '100-53-8',
    category: 'Pharmaceutical Intermediates',
    subcategory: 'Pharmaceutical Intermediates',
    uses: 'Used in pharmaceutical synthesis as an intermediate and for importing benzylthio group.',
    molecularFormula: 'C7H8S',
    molecularWeight: '124.21 g/mol'
  },
  {
    id: 'cp-6',
    name: '1,3-Dichloro acetone',
    casNo: '534-07-6',
    category: 'Pharmaceutical Intermediates',
    subcategory: 'Pharmaceutical Intermediates',
    uses: 'Reagent and building block for pharmaceutical synthesis and heterocyclic rings construction.',
    molecularFormula: 'C3H4Cl2O',
    molecularWeight: '126.97 g/mol'
  },
  {
    id: 'cp-7',
    name: '2-Chloro-5-Nitrobenzoic Acid',
    casNo: '2516-96-3',
    category: 'Agrochemical Intermediates',
    subcategory: 'Agrochemical Intermediates',
    otherNames: '2,5 - CNBA',
    molecularFormula: 'C7H4ClNO4',
    molecularWeight: '201.5 g/mol',
    applications: [
      'Intermediate for BUTAFENACIL (herbicides)',
      'Intermediate for 5-Nitro-N-(2-methyl-3-trifluoromethylphenyl) anthranilic acid',
      'Intermediate for anti-diarrheal agents',
      'Crop protection products and general pharmaceutical synthesis'
    ],
    uses: 'Used as an intermediate in pharmaceutical manufacturing and agricultural crop protection.'
  },
  {
    id: 'cp-8',
    name: '2-Acetyl Thiophene',
    casNo: '88-15-3',
    category: 'Pharmaceutical Intermediates',
    subcategory: 'Pharmaceutical Intermediates',
    otherNames: 'T2AC',
    molecularFormula: 'C6H6OS',
    molecularWeight: '126.18 g/mol',
    applications: [
      'Tiamonium Iodide [Antispasmodic]',
      'Suprofan [Analgesic/Antiallergic]',
      'Stepronin [Hepating Protectant]',
      'Tenonitrozole [Anti-Fungal / Anti-Protozoal]',
      'Tienilic Acid [Uricosuric Agent]',
      'Namirotene [Anti-Depressant]',
      'Tuloxetine Oxalate [Anti-Depressant]',
      'Arotinolol HCl',
      'Duloxetine Hydrochloride'
    ],
    uses: 'Highly valuable thiophene heterocyclic intermediate used widely in manufacturing drugs.'
  },
  {
    id: 'cp-9',
    name: 'Thiophene-2-Carboxaldehyde',
    casNo: '98-03-3',
    category: 'Pharmaceutical Intermediates',
    subcategory: 'Pharmaceutical Intermediates',
    otherNames: 'T2A',
    molecularFormula: 'C5H4OS',
    molecularWeight: '112.15 g/mol',
    applications: [
      'EPROSARTAN (Antihypertensive)',
      'PYRENTAL PALMOATE',
      'ETHABOXAM (Fungicide)',
      'TENIPOSIDE (Chemotherapy)',
      'TEMOCAPRIL (ACE Inhibitor)',
      'AZOSEMIDE',
      'RALTITREXED',
      'TENILYDONE'
    ],
    uses: 'Premium building block for pharmaceutical agents and agrochemical compounds.'
  },
  {
    id: 'cp-10',
    name: '4-Amino Pyridine (Amino Pyridine)',
    casNo: '504-24-5',
    category: 'Pharmaceutical Intermediates',
    subcategory: 'Pharmaceutical Intermediates',
    otherNames: '4 - AP',
    molecularFormula: 'C5H6N2',
    molecularWeight: '94.12 g/mol',
    applications: [
      'Fampyridine (Multiple Sclerosis treatment)',
      'Pinacidil (Vasodilator)',
      'Propylidone',
      'Bispyridine',
      'Intermediate for 4-Hydroxypyridine, 4-Dimethylaminopyridine (DMAP), and 4-Aminopiperidine',
      'Intermediate for Torasemide',
      'Astemizole (anti-histamine)',
      'Domperidone (antiemetic)'
    ],
    uses: 'Crucial pharmaceutical active ingredient intermediate used for nervous system drugs, vasodilators, and antihistamines.'
  },
  {
    id: 'cp-11',
    name: '2-Iodobenzoic Acid',
    casNo: '88-67-5',
    category: 'Speciality Chemicals',
    subcategory: 'Speciality Chemicals',
    uses: 'Synthesizing IBX and DMP (Dess-Martin periodinane) oxidizing agents, organic synthesis.',
    molecularFormula: 'C7H5IO2',
    molecularWeight: '248.02 g/mol'
  },
  {
    id: 'cp-12',
    name: 'Diiodomethane',
    casNo: '2595-53-8',
    category: 'Speciality Chemicals',
    subcategory: 'Speciality Chemicals',
    uses: 'High refractive index liquid (1.74), used in mineral separation, heavy liquid analysis, and Simmons-Smith cyclopropanations.',
    molecularFormula: 'CH2I2',
    molecularWeight: '267.84 g/mol'
  },
  {
    id: 'cp-13',
    name: '4-Aminoacetophenone',
    casNo: '99-92-3',
    category: 'Pharmaceutical Intermediates',
    subcategory: 'Pharmaceutical Intermediates',
    uses: 'Intermediate for pharmaceuticals, dyes, and other fine chemicals.',
    molecularFormula: 'C8H9NO',
    molecularWeight: '135.16 g/mol'
  },
  {
    id: 'cp-14',
    name: '2-Bromo-5-Chlorotoluene',
    casNo: '14495-51-3',
    category: 'Pharmaceutical Intermediates',
    subcategory: 'Pharmaceutical Intermediates',
    uses: 'Key organic reagent in halogenated compound synthesis and pharmaceutical couplings.',
    molecularFormula: 'C7H6BrCl',
    molecularWeight: '205.48 g/mol'
  },
  {
    id: 'cp-15',
    name: '3-bromobenzoic acid',
    casNo: '585-76-2',
    category: 'Pharmaceutical Intermediates',
    subcategory: 'Pharmaceutical Intermediates',
    uses: 'Used as a key reactant/building block in pharmaceutical synthesis.',
    molecularFormula: 'C7H5BrO2',
    molecularWeight: '201.02 g/mol'
  },
  {
    id: 'cp-16',
    name: '3-bromobenzoic acid ter-butyl Ester',
    casNo: '69038-74-0',
    category: 'Pharmaceutical Intermediates',
    subcategory: 'Pharmaceutical Intermediates',
    uses: 'Synthetic organic building block for pharmaceuticals and advanced specialty chemicals.',
    molecularFormula: 'C11H13BrO2',
    molecularWeight: '257.12 g/mol'
  },
  {
    id: 'cp-17',
    name: '2-Bromo aniline',
    casNo: '615-36-1',
    category: 'Pharmaceutical Intermediates',
    subcategory: 'Pharmaceutical Intermediates',
    uses: 'Important intermediate in the pharmaceutical manufacturing and azo dye synthesis.',
    molecularFormula: 'C6H6BrN',
    molecularWeight: '172.02 g/mol'
  },
  {
    id: 'cp-18',
    name: '2-Bromo iodobenzene',
    casNo: '583-55-1',
    category: 'Pharmaceutical Intermediates',
    subcategory: 'Pharmaceutical Intermediates',
    uses: 'Bifunctional building block utilized in transition-metal catalyzed cross-coupling reactions.',
    molecularFormula: 'C6H4BrI',
    molecularWeight: '282.91 g/mol'
  }
];
