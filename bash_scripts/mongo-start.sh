docker run -d \
    -p 27017:27017 \
    --name voicemod-database \
    -v mongo-data:/data/db \
    -e MONGO_URL=voicemod \
    -e MONGODB_INITDB_ROOT_USERNAME=example-user \
    -e MONGODB_INITDB_ROOT_PASSWORD=example-pass \
    mongo:latest