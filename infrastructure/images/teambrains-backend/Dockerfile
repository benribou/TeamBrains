FROM python:3.9-alpine

WORKDIR /app

COPY src/servers/teambrains-backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install Flask

COPY src/servers/teambrains-backend/ .

EXPOSE 5000

CMD ["python", "app.py"]
