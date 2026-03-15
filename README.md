# 🥙 El Arepero - Bot de WhatsApp

Bot automático de WhatsApp para **El Arepero** - Arepas Venezolanas en Punta Cana.

## 🚀 Desplegar en Render.com (GRATIS)

### Paso 1: Preparar el código

1. Crea una cuenta gratis en [GitHub](https://github.com)
2. Crea un nuevo repositorio llamado `el-arepero-bot`
3. Sube TODOS estos archivos al repositorio:
   - `index.js`
   - `config.js`
   - `responses.js`
   - `package.json`
   - `.env` (opcional - mejor usar variables de entorno en Render)

### Paso 2: Desplegar en Render

1. Ve a [Render.com](https://render.com) y crea una cuenta gratis
2. Haz clic en **"New +"** → **"Web Service"**
3. Conecta tu repositorio de GitHub
4. Configura así:
   - **Name:** `el-arepero-bot`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** `Free`

### Paso 3: Configurar Variables de Entorno

En Render, ve a **Environment** y agrega:

```
WHATSAPP_NUMBER=18296403859
WHATSAPP_NAME=Kariña
CHROME_PATH=/usr/bin/google-chrome-stable
BUSINESS_NAME=EL AREPERO
BUSINESS_LOCATION=Uvero Alto Plaza, Punta Cana
BUSINESS_WEBSITE=https://elarepero.com
NODE_ENV=production
BOT_ENABLED=true
```

### Paso 4: Escanear QR

1. Una vez desplegado, ve a **Logs** en Render
2. Verás el código QR generado
3. Escanéalo con tu WhatsApp Business
4. ¡Listo! El bot estará funcionando 24/7 🎉

## 📱 Comandos Disponibles

- `HOLA` - Bienvenida
- `MENÚ` - Ver menú completo
- `SUGERIDAS` - Arepas recomendadas
- `COMBOS` - Ofertas especiales
- `DELIVERY` - Info de entrega
- `UBICACIÓN` - Dirección y mapa
- `HORARIO` - Horario de atención
- `PAGOS` - Formas de pago
- `PRECIOS` - Lista de precios
- `PEDIR` - Hacer un pedido

## 🔧 Ejecutar localmente

```bash
npm install
npm start
```

## 📝 Notas

- El bot usa `whatsapp-web.js` - NO necesita Twilio
- Funciona con tu número de WhatsApp Business real
- 100% GRATIS en Render (plan gratuito)
- Se mantiene activo 24/7

---

**Creado por Troy Master** | [elarepero.com](https://elarepero.com)
