const http = require('http');
const fs = require('fs');
const path = require('path');

let contador = 1;
const server = http.createServer(handleRequest);

// Função de manipulação de requisições
function handleRequest(request, response) {
  const { method, url } = request;

  // Criando as rotas para os arquivos:

  // Rota para pagina home(index)
  if (method === 'GET' && (url === '/' || url === '/index.html')) {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Erro interno do servidor');
        return;
      }
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    });

    // Rota para a página "Sobre"
    } else if (method === 'GET' && url === '/Screens/sobre.html') {
        fs.readFile(path.join(__dirname, 'Screens', 'sobre.html'), 'utf8', (err, data) => {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'text/plain' });
            response.end('Erro interno do servidor');
            return;
        }
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
        });

  // Rota das views
  } else if (method === 'GET' && url === '/visualizacoes') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(contador.toString());
    atualizarContador();

  // Rota para os arquivos CSS
  } else if (method === 'GET' && url === '/style.css') {
    fs.readFile(path.join(__dirname, 'style.css'), 'utf8', (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Erro interno do servidor');
        return;
      }
      response.writeHead(200, { 'Content-Type': 'text/css' });
      response.end(data);
    });
  } else if (method === 'GET' && url === '/Screens/style.css') {
    fs.readFile(path.join(__dirname, 'Screens', 'style.css'), 'utf8', (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Erro interno do servidor');
        return;
      }
      response.writeHead(200, { 'Content-Type': 'text/css' });
      response.end(data);
    });
  
    // Rota das Imagens
    } else if (method === 'GET' && url === '/assets/images/fotoHome.jpg') {
        fs.readFile(path.join(__dirname, 'assets', 'images', 'fotoHome.jpg'), (err, data) => {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'text/plain' });
            response.end('Erro interno do servidor');
            return;
        }
        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
        response.end(data);
        });
    }  else if (method === 'GET' && url === '/assets/icons/headerIcon.png') {
        fs.readFile(path.join(__dirname, 'assets', 'icons', 'headerIcon.png'), (err, data) => {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'text/plain' });
            response.end('Erro interno do servidor');
            return;
        }
        response.writeHead(200, { 'Content-Type': 'image/png' });
        response.end(data);
        });
    }  else if (method === 'GET' && url === '/assets/icons/Github.svg') {
        fs.readFile(path.join(__dirname, 'assets', 'icons', 'Github.svg'), (err, data) => {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'image/svg+xml' });
            response.end('Erro interno do servidor');
            return;
        }
        response.writeHead(200, { 'Content-Type': 'image/svg+xml' });
        response.end(data);
        });
    } else if (method === 'GET' && url === '/assets/icons/Linkedin.svg') {
        fs.readFile(path.join(__dirname, 'assets', 'icons', 'Linkedin.svg'), (err, data) => {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'image/svg+xml' });
            response.end('Erro interno do servidor');
            return;
        }
        response.writeHead(200, { 'Content-Type': 'image/svg+xml' });
        response.end(data);
        });
    } else if (method === 'GET' && url === '/assets/icons/CSS.svg') {
        fs.readFile(path.join(__dirname, 'assets', 'icons', 'CSS.svg'), (err, data) => {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'image/svg+xml' });
            response.end('Erro interno do servidor');
            return;
        }
        response.writeHead(200, { 'Content-Type': 'image/svg+xml' });
        response.end(data);
        });
    } else if (method === 'GET' && url === '/assets/icons/HTML.svg') {
        fs.readFile(path.join(__dirname, 'assets', 'icons', 'HTML.svg'), (err, data) => {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'image/svg+xml' });
            response.end('Erro interno do servidor');
            return;
        }
        response.writeHead(200, { 'Content-Type': 'image/svg+xml' });
        response.end(data);
        });
    } else if (method === 'GET' && url === '/assets/icons/JS.svg') {
        fs.readFile(path.join(__dirname, 'assets', 'icons', 'JS.svg'), (err, data) => {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'image/svg+xml' });
            response.end('Erro interno do servidor');
            return;
        }
        response.writeHead(200, { 'Content-Type': 'image/svg+xml' });
        response.end(data);
        });
    } else if (method === 'GET' && url === '/assets/icons/Python.svg') {
        fs.readFile(path.join(__dirname, 'assets', 'icons', 'Python.svg'), (err, data) => {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'image/svg+xml' });
            response.end('Erro interno do servidor');
            return;
        }
        response.writeHead(200, { 'Content-Type': 'image/svg+xml' });
        response.end(data);
        });
    } else if (method === 'GET' && url === '/assets/icons/react-native.svg') {
        fs.readFile(path.join(__dirname, 'assets', 'icons', 'react-native.svg'), (err, data) => {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'image/svg+xml' });
            response.end('Erro interno do servidor');
            return;
        }
        response.writeHead(200, { 'Content-Type': 'image/svg+xml' });
        response.end(data);
        });
    } else if (method === 'GET' && url === '/assets/icons/Rick.svg') {
      fs.readFile(path.join(__dirname, 'assets', 'icons', 'Rick.svg'), (err, data) => {
      if (err) {
          response.writeHead(500, { 'Content-Type': 'image/svg+xml' });
          response.end('Erro interno do servidor');
          return;
      }
      response.writeHead(200, { 'Content-Type': 'image/svg+xml' });
      response.end(data);
      });
  } else if (method === 'GET' && url === '/assets/icons/Morty.svg') {
    fs.readFile(path.join(__dirname, 'assets', 'icons', 'Morty.svg'), (err, data) => {
    if (err) {
        response.writeHead(500, { 'Content-Type': 'image/svg+xml' });
        response.end('Erro interno do servidor');
        return;
    }
    response.writeHead(200, { 'Content-Type': 'image/svg+xml' });
    response.end(data);
    });
} else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Página não encontrada');
    }
}





// Função que atualiza as visitas
function atualizarContador() {
  contador++;
  fs.writeFile('acessos.txt', contador.toString(), err => {
    if (err) {
      console.error('Ocorreu um erro ao atualizar o contador:', err);
    }
  });
}

// Capturar o sinal de interrupção (Ctrl+C)
process.on('SIGINT', () => {
  console.log('Encerrando o servidor...');
  server.close(() => {
    console.log('Servidor encerrado.');
    process.exit();
  });
});

// Iniciar o servidor na porta 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
