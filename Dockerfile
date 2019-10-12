FROM nginx:1.14.2-alpine
COPY ./out /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]