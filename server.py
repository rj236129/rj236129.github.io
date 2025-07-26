from flask import Flask, request, jsonify, send_from_directory
import requests

app = Flask(__name__, static_folder='static')

# === Configuration ===
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"
GROQ_API_KEY = "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"  # ⚠️ Replace with your real key
MODEL_NAME = "meta-llama/llama-4-maverick-17b-128e-instruct"

# === Serve HTML File ===
@app.route("/chatbot")
def serve_html():
    return send_from_directory(app.static_folder, "chatbot.html")

# === Handle Chat Request ===
@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")
    
    if not user_message:
        return jsonify({"error": "No message provided"}), 400

    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": MODEL_NAME,
        "messages": [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": user_message}
        ]
    }

    try:
        response = requests.post(GROQ_API_URL, headers=headers, json=payload)
        response.raise_for_status()
        reply = response.json()["choices"][0]["message"]["content"]
        return jsonify({"reply": reply})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# === Run Server ===
if __name__ == "__main__":
    app.run(debug=True)
