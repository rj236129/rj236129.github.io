from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend calls from browser

GROQ_API_KEY = "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"
MODEL = "llama-3-8b-8192"

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get("message")

    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": MODEL,
        "messages": [
            {"role": "user", "content": user_message}
        ]
    }

    try:
        response = requests.post("https://api.groq.com/openai/v1/chat/completions",
                                 headers=headers, json=payload)
        response_json = response.json()
        bot_reply = response_json['choices'][0]['message']['content']
        return jsonify({"reply": bot_reply})

    except Exception as e:
        return jsonify({"reply": f"Error: {str(e)}"})

if __name__ == '__main__':
    app.run(port=5000)
