from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app1 = FastAPI()
app1.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

@app1.get("/")
def home():
    return {"message": "backend dev1"}
