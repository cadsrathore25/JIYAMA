import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types';
import { Sparkles, Send, Trash2, Beaker, User, ShieldCheck, HelpCircle, ArrowRight, X } from 'lucide-react';

interface SourcingAssistantProps {
  onClose: () => void;
  initialMessage?: string | null;
  onClearInitialMessage: () => void;
}

const SUGGESTED_PROMPTS = [
  {
    label: 'Convert Nitrile to Amine',
    text: 'What is the best Jiyama catalyst to convert a nitrile to a primary amine (e.g. for Venlafaxine)?'
  },
  {
    label: 'Palladium Complex CAS 13965-03-2',
    text: 'Can you give me detailed specs and reactions for Bis(triphenylphosphine)palladium(II) dichloride (CAS: 13965-03-2)?'
  },
  {
    label: 'Cosmetic humectant 1,2-Pentanediol',
    text: 'Do you supply 1,2-Pentanediol? What is its role and CAS registry number in cosmetic formulation?'
  },
  {
    label: 'Udaipur Office Coordinate',
    text: 'Where is Jiyama Tradelinks based? What is the mobile phone number and team background?'
  }
];

export default function SourcingAssistant({
  onClose,
  initialMessage,
  onClearInitialMessage,
}: SourcingAssistantProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      content: `Hello! I'm **Jiyama-Bot**, your expert Chemical Procurement & Catalyst Matching Assistant. 🧪

Jiyama Tradelinks specializes in high-purity industrial grade catalysts, APIs, and custom sourcing. Our team has **20+ years of procurement expertise**.

How can I assist you with your research or wholesale chemical sourcing requirements today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Handle preloaded initial message
  useEffect(() => {
    if (initialMessage) {
      sendMessage(initialMessage);
      onClearInitialMessage(); // Clear it out to prevent infinite re-trigger
    }
  }, [initialMessage]);

  // Scroll to bottom on message updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setLoading(true);

    try {
      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to query Gemini API');
      }

      const data = await response.json();

      const botMessage: ChatMessage = {
        role: 'model',
        content: data.text || 'Apologies, I encountered an issue parsing the technical data.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: ChatMessage = {
        role: 'model',
        content: 'Failed to connect with Jiyama-Bot. We may be experiencing local network or secret key restrictions. Please contact Udaipur office at **+91-8918588147** for direct procurement assistance.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputText);
  };

  const clearChat = () => {
    setMessages([
      {
        role: 'model',
        content: 'Chat history cleared. How can I assist you with Jiyama catalysts or customized sourcing solutions?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <div id="ai-assistant-container" className="flex flex-col h-[600px] bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden max-w-4xl mx-auto my-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-slate-950 px-6 py-4 text-white border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-400 to-sky-600 text-slate-950 shadow-md">
            <Sparkles className="h-5 w-5 text-slate-950" />
          </div>
          <div>
            <h3 className="font-display font-bold text-sm tracking-tight text-white flex items-center space-x-1.5">
              <span>Jiyama-Bot AI</span>
              <span className="inline-block rounded-full bg-sky-500/20 text-sky-400 text-[9px] px-2 py-0.5 border border-sky-500/30 font-mono">ONLINE</span>
            </h3>
            <p className="text-[10px] text-slate-400">Chemical Procurement Specialist (20+ Years Veteran Knowhow)</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={clearChat}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
            title="Clear Chat"
          >
            <Trash2 className="h-4.5 w-4.5" />
          </button>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
            title="Close Assistant"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main chat layout */}
      <div className="flex-1 overflow-y-auto bg-slate-950 p-6 space-y-4">
        {messages.map((msg, index) => {
          const isBot = msg.role === 'model';
          return (
            <div
              key={index}
              className={`flex items-start space-x-3 ${isBot ? 'justify-start' : 'justify-end'}`}
            >
              {isBot && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-sky-400 border border-slate-800">
                  <Beaker className="h-4.5 w-4.5" />
                </div>
              )}

              <div
                className={`max-w-[80%] rounded-2xl p-4 shadow-sm text-xs leading-relaxed ${
                  isBot
                    ? 'bg-slate-900 text-slate-200 border border-slate-850 rounded-tl-none'
                    : 'bg-sky-600 text-white rounded-tr-none'
                }`}
              >
                {/* Custom simple markdown-like rendering */}
                <div className="space-y-2 whitespace-pre-wrap">
                  {msg.content.split('\n').map((line, lIdx) => {
                    // Check bold terms
                    let formattedLine = line;
                    
                    // Simple replacement for bold markers **text**
                    const boldRegex = /\*\*(.*?)\*\*/g;
                    const parts = [];
                    let lastIndex = 0;
                    let match;

                    while ((match = boldRegex.exec(line)) !== null) {
                      if (match.index > lastIndex) {
                        parts.push(line.substring(lastIndex, match.index));
                      }
                      parts.push(<strong key={match.index} className={isBot ? "text-white font-bold" : "text-white font-extrabold"}>{match[1]}</strong>);
                      lastIndex = boldRegex.lastIndex;
                    }

                    if (lastIndex < line.length) {
                      parts.push(line.substring(lastIndex));
                    }

                    return (
                      <p key={lIdx}>
                        {parts.length > 0 ? parts : line}
                      </p>
                    );
                  })}
                </div>
                <span className={`block text-[9px] mt-2 text-right ${isBot ? 'text-slate-500' : 'text-sky-200'}`}>
                  {msg.timestamp}
                </span>
              </div>

              {!isBot && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white border border-slate-800">
                  <User className="h-4.5 w-4.5" />
                </div>
              )}
            </div>
          );
        })}

        {loading && (
          <div className="flex items-start space-x-3 justify-start">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-sky-400 border border-slate-800">
              <Beaker className="h-4.5 w-4.5 animate-spin" />
            </div>
            <div className="rounded-2xl p-4 bg-slate-900 border border-slate-850 rounded-tl-none shadow-sm text-xs text-slate-400 flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-sky-450 bg-sky-400 animate-ping" />
              <span>Scanning structural matching catalogs...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested prompts panel */}
      {messages.length === 1 && (
        <div className="px-6 py-3 bg-slate-900 border-t border-slate-800">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center space-x-1 mb-2">
            <HelpCircle className="h-3.5 w-3.5 text-slate-550 text-slate-500" />
            <span>Suggested Research Prompts</span>
          </span>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {SUGGESTED_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => sendMessage(prompt.text)}
                className="flex items-center justify-between text-left rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-900 hover:border-sky-500/40 p-2.5 text-xs text-slate-300 transition"
              >
                <span className="truncate pr-2">{prompt.label}</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-500" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input panel */}
      <div className="p-4 bg-slate-900 border-t border-slate-800">
        <form onSubmit={handleFormSubmit} className="flex space-x-3">
          <input
            id="assistant-chat-input"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            disabled={loading}
            placeholder="Ask about catalysts (Pd/C, Pt/C), Raney Nickel, CAS numbers, or custom sourcing compliance..."
            className="flex-1 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-slate-200 outline-none focus:border-sky-500 focus:bg-slate-950"
          />
          <button
            id="assistant-chat-submit"
            type="submit"
            disabled={loading || !inputText.trim()}
            className="rounded-xl bg-sky-600 hover:bg-sky-500 disabled:bg-slate-800 px-5 text-xs font-semibold text-white transition flex items-center justify-center shadow-sm"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
