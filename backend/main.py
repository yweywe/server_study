from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

@app.get("/")
async def root():
    return {"Server, at your service!"}

@app.get("/items/{name}")
async def say_hello(name: str, q: Union[str, None] = None):
    return {"message": f"Hello {name}", "q:": q}
