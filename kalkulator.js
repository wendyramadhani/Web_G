body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

.calculator {
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

#display {
    width: 100%;
    height: 40px;
    font-size: 24px;
    margin-bottom: 10px;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

button {
    font-size: 20px;
    padding: 10px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #2980b9;
}
