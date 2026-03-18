🐳 Web App for Docker – Containerized Python Application

A simple Python-based web application deployed using Docker containers, demonstrating how to package, build, and run applications in an isolated environment.

📌 Overview: 
This project showcases how to:
- Build a Python web application
- Containerize it using Docker
- Deploy and run it on a Linux environment
- Access it via browser using port mapping

It ensures that the application runs consistently across different systems without dependency issues.
The project follows a complete Docker workflow including image creation, container execution, and management.

🚀 Features
- Python-based web application
- Docker containerization
- Portable & environment-independent
- Easy deployment with minimal setup
- Accessible via localhost/browser
- Supports interactive debugging

🛠️ Tech Stack
- Python
- Docker
- Linux (Ubuntu/Fedora)
- HTML
- Flask

⚙️ Prerequisites: 

Before running the project, ensure you have:

- Linux system or VM
- Sudo/root access
- Stable internet connection
- Docker installed
- Code editor (VS Code / Vim / Nano)

🔧 Installation & Setup
1. Clone the Repository
- git clone https://github.com/AyushiSinha58/Web-App-For-Docker.git
- cd Web-App-For-Docker
2. (Optional) Create Virtual Environment
- python3 -m venv venv
- source venv/bin/activate
3. Install Dependencies (Local Testing)
- pip install -r requirements.txt

🐳 Docker Setup
4. Build Docker Image
- docker build -t web-app .
- This packages:
- - Python runtime
- - Dependencies
- - Application code
into a single image.

5. Run Docker Container
- docker run -p 5000:5000 web-app
- 5000 → Host port
- 5000 → Container port

🔍 Run in Interactive Mode (Debugging)
- docker run -it -p 5000:5000 --entrypoint /bin/bash web-app

🌐 Access the Application
- Once the container is running, open:
http://localhost:5000
or use your system’s local IP address.

📦 Docker Commands Cheat Sheet
1. List Running Containers
- docker ps
2. List All Containers
- docker ps -a
3. View Logs
- docker logs <container_id>
4. Access Container Shell
- docker exec -it <container_id> /bin/bash

🧠 How It Works
1. The web app is written in Python
2.requirements.txt stores dependencies
3. Dockerfile:
- Sets Python environment
- Installs dependencies
- Copies app into container
4. Docker builds an image
5. Container runs the app in isolation
6. Port mapping exposes it to browser

📊 Key Learning Outcomes
1. Understanding Docker images & containers
2. Writing Dockerfiles
3. Managing dependencies using requirements.txt
4. Running apps in isolated environments
5. Debugging containers

⚠️ Limitations
1. Basic UI (minimal frontend)
2. Not optimized for production
3. No database integration
4. Single-container setup

📜 License

This project is for educational purposes.
