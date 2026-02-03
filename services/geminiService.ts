import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

const getApiKey = (): string => {
  const localKey = localStorage.getItem('GEMINI_API_KEY');
  if (localKey) return localKey;
  // Fallback to env var, handling both Vite and older process.env styles if needed
  return process.env.API_KEY || '';
};

export const analyzeContactMessage = async (message: string): Promise<AnalysisResult> => {
  const apiKey = getApiKey();

  if (!apiKey) {
    console.warn("API Key is missing. Returning mock data.");
    return {
      category: "General Inquiry",
      priority: "Normal",
      sentiment: "Neutral",
      suggestedAction: "Reply within 24 hours."
    };
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash", // Updated to stable model
      contents: [
        {
          role: "user",
          parts: [{
            text: `Analyze the following contact form message from a potential client for a digital agency. 
          Message: "${message}"`
          }]
        }
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            category: {
              type: Type.STRING,
              description: "The category of the inquiry (e.g., New Project, Job Application, Support, Partnership)",
            },
            priority: {
              type: Type.STRING,
              description: "Estimated priority: High, Medium, Low",
            },
            sentiment: {
              type: Type.STRING,
              description: "Tone of the message: Professional, Urgent, Casual, Angry",
            },
            suggestedAction: {
              type: Type.STRING,
              description: "Brief recommended next step for the agency team.",
            },
          },
          required: ["category", "priority", "sentiment", "suggestedAction"],
        },
      },
    });

    const text = response.text();
    if (!text) throw new Error("No response from AI");

    return JSON.parse(text) as AnalysisResult;
  } catch (error) {
    console.error("Gemini analysis failed:", error);
    // Fallback in case of error
    return {
      category: "Unknown",
      priority: "Medium",
      sentiment: "Neutral",
      suggestedAction: "Manual review required."
    };
  }
};
