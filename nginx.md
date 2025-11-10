# how to configre basic nginx

```bash
# Update package list
sudo apt update

# Install Nginx
sudo apt install nginx -y

# Start and enable Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Create directory for your app
sudo mkdir -p /var/www/react-app

# Set proper permissions
sudo chown -R ubuntu:ubuntu /var/www/react-app

# Configure Nginx
sudo nano /etc/nginx/sites-available/react-app
```

Add this Nginx configuration:

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name YOUR-EC2-PUBLIC-IP;

    root /var/www/react-app;
    index index.html;
}
```


```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/react-app /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

