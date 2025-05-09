FROM mongo:6.0

#Instalar o MongoDB Shell
RUN apt-get update && apt-get install -y mongodb-mongosh && rm -rf /var/lib/apt/list/*

CMD ["mongod"]