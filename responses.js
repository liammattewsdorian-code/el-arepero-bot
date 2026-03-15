const config = require('./config');

// ─── UTILIDADES ───
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getHora = () => new Date().getHours();

const getSaludo = (h) => {
    h = (h !== undefined) ? h : getHora();
    if (h >= 6 && h < 12) return 'Buenos días ☀️';
    if (h >= 12 && h < 19) return 'Buenas tardes 🌤️';
    return 'Buenas noches 🌙';
};

const MENU_RAPIDO =
    `🥩 *Carnes:* Carne Mechada/Pollo RD$60 · Cerdo/Tocino/Chorizo RD$70\n`
    + `🧀 *Quesos:* Amarillo RD$60 · De Mano RD$70 · Guayanés RD$80\n`
    + `🥑 *Vegetales:* Aguacate RD$60 · Caraotas/Plátano RD$50 · Cebolla/Pimiento/Tomate RD$40 · Lechuga RD$30\n`
    + `🍳 *Proteína:* Huevo Perico RD$60\n`
    + `🥄 *Salsas:* Guasacaca/Chimichurri RD$40 · Mayo/Ajo RD$30 · Mostaza/Ketchup RD$20`;

const M = {
    bienvenida(nombre) {
        const s = getSaludo();
        const n = nombre ? `*${nombre.split(' ')[0]}*` : '';
        return pick([
            `${s} ${n} 😊 ¡Qué bueno que nos escribes!\n\n`
            + `Soy *${config.whatsapp.name}*, del equipo de *${config.business.name}* 🥙\n`
            + `Arepas venezolanas auténticas en Punta Cana — abiertas *24 horas* 💫\n\n`
            + `¿En qué te ayudo?\n\n`
            + `*1️⃣* Ver el menú\n*2️⃣* Hacer un pedido\n*3️⃣* Delivery a mi hotel\n`
            + `*4️⃣* Ubicación y horario\n*5️⃣* Combos y ofertas\n\n`
            + `_Responde con el número o palabra clave_ 🙌`,

            `${s} ${n} 👋\n\n`
            + `¡Bienvenido/a a *${config.business.name}*! 🥙✨\n`
            + `Hacemos cada arepa en budaré de verdad, con sabor 100% venezolano 🇻🇪\n\n`
            + `Estamos en ${config.business.location} — *abiertos las 24h* 😍\n\n`
            + `Escríbeme qué necesitas:\n`
            + `📋 *MENÚ* · 🛵 *DELIVERY* · 🎁 *COMBOS* · 🥙 *PEDIR*`
        ]);
    },

    menu() {
        return `📋 *MENÚ COMPLETO — ${config.business.name}* 🥙\n`
            + `━━━━━━━━━━━━━━━━━━━━\n\n`
            + `🏷️ *Base arepa:* ${config.precios.moneda}${config.precios.base} | Máx. ${config.precios.maxIngredientes} ingredientes\n\n`
            + MENU_RAPIDO + `\n\n`
            + `━━━━━━━━━━━━━━━━━━━━\n`
            + `💡 *Ejemplo:* Base + Carne Mechada + Queso de Mano + Aguacate = *RD$290*\n\n`
            + `🥙 Ver arepas sugeridas → escribe *SUGERIDAS*\n`
            + `🎁 Ver combos → escribe *COMBOS*\n`
            + `🛒 Pedir ahora → escribe *PEDIR* 😍`;
    },

    sugeridas() {
        return `🥙 *NUESTRAS AREPAS ESTRELLA*\n`
            + `━━━━━━━━━━━━━━━━━━━━\n\n`
            + `*1. La Estrella ⭐* ← La más pedida\n`
            + `📦 Cerdo Asado · Queso de Mano · Aguacate · Plátano · Cebolla · Guasacaca\n`
            + `💵 ~RD$430\n\n`
            + `*2. Reina Pepiada 👑*\n`
            + `📦 Pollo · Aguacate · Mayo Casera · Cebolla Caramelizada\n`
            + `💵 ~RD$310\n\n`
            + `*3. Pabellón Criollo 🫘*\n`
            + `📦 Carne Mechada · Caraotas · Plátano Maduro · Queso de Mano\n`
            + `💵 ~RD$360\n\n`
            + `━━━━━━━━━━━━━━━━━━━━\n`
            + `💡 ¿Quieres personalizarla? Escribe *PEDIR* 😊`;
    },

    combos() {
        return `🎁 *COMBOS ESPECIALES — ${config.business.name}*\n`
            + `━━━━━━━━━━━━━━━━━━━━\n\n`
            + `*Combo Individual 🥙*\n`
            + `📦 1 Arepa + 1 Bebida + Tequeños (6 und)\n`
            + `💵 *RD$450*\n\n`
            + `*Combo Pareja 💑*\n`
            + `📦 2 Arepas a elegir + 2 Bebidas + Tequeños\n`
            + `💵 *RD$800*\n\n`
            + `🛵 Delivery incluido en Uvero Alto\n`
            + `_¿Cuál te llama la atención?_ 😍`;
    },

    delivery() {
        return `🛵 *DELIVERY — ${config.business.name}*\n`
            + `━━━━━━━━━━━━━━━━━━━━\n\n`
            + `✅ Delivery *GRATIS* en Uvero Alto\n`
            + `⏱️ Tiempo: *30–45 minutos*\n`
            + `💵 Pedido mínimo: *RD$500*\n\n`
            + `🏨 *Entregamos en:* Hard Rock, Secrets, Royalton, Dreams, Nickelodeon y más ✨\n\n`
            + `_¿Desde qué hotel nos escribes? Te confirmo el tiempo exacto_ 🏃‍♂️`;
    },

    ubicacion() {
        return `📍 *DÓNDE ESTAMOS — ${config.business.name}*\n`
            + `━━━━━━━━━━━━━━━━━━━━\n\n`
            + `📌 *${config.business.location}*\n\n`
            + `🗺️ Google Maps: ${config.business.maps}\n\n`
            + `⏰ *24/7 — Todos los días* 🕐\n\n`
            + `_¿Vienes a comer aquí o prefieres delivery?_ 🏃‍♂️`;
    },

    horario() {
        return `⏰ *HORARIO — ${config.business.name}*\n`
            + `━━━━━━━━━━━━━━━━━━━━\n\n`
            + `🟢 *¡Estamos ABIERTOS ahora mismo!*\n\n`
            + `Lunes a Domingo — *00:00 a 23:59* 🌙☀️\n`
            + `Sí, *las 24 horas del día*\n\n`
            + `_¿Qué se te antoja ahora?_ 🥙`;
    },

    pagos() {
        return `💳 *FORMAS DE PAGO — ${config.business.name}*\n`
            + `━━━━━━━━━━━━━━━━━━━━\n\n`
            + `✅ Efectivo (RD$ y USD)\n`
            + `✅ Tarjeta de crédito/débito\n`
            + `✅ transferencia bancaria / Zelle\n\n`
            + `_El pago se realiza al recibir tu pedido_ 🙏`;
    },

    precios() {
        return `💰 *TABLA DE PRECIOS — ${config.business.name}*\n`
            + `━━━━━━━━━━━━━━━━━━━━\n\n`
            + `🥙 Arepa base: *RD$100*\n`
            + `🧩 Ingredientes promedio: *RD$60*\n\n`
            + `_Escribe MENÚ para ver el detalle de cada ingrediente_ 😊`;
    },

    oferta() {
        return `🔥 *OFERTA DEL DÍA*\n`
            + `━━━━━━━━━━━━━━━━━━━━\n\n`
            + `*2 Arepas + 2 Bebidas + Tequeños*\n`
            + `~~RD$1,100~~ → *RD$900* 🎉\n\n`
            + `_¿La aprovechamos?_ 😍`;
    },

    vegetariano() {
        return `🌱 *Opciones vegetarianas:* Aguacate, Quesos, Caraotas, Plátano, Vegetales frescos y salsas caseras.\n\n`
            + `_¿Armamos tu arepa ahora? Escribe PEDIR_ 😊`;
    },

    sinGluten() {
        return `🌾 *Sin Gluten:* Nuestra masa es 100% maíz natural, sin trigo. ¡Seguro y delicioso! ✅`;
    },

    gracias(nombre) {
        const n = nombre ? nombre.split(' ')[0] : '';
        return pick([
            `¡A ti ${n}! 🙏 Fue un placer. ¡Que disfrutes tu arepa! 🥙😍`,
            `¡De nada ${n}! ¡Buen provecho! 🥙✨`
        ]);
    },

    noEntendio(nombre) {
        const n = nombre ? nombre.split(' ')[0] : '';
        return `Mmm ${n}, no te entendí del todo 😅\n\n`
            + `Escribe:\n`
            + `📋 *MENÚ* · 🥙 *SUGERIDAS* · 🎁 *COMBOS* · 🛵 *DELIVERY*\n`
            + `📍 *UBICACION* · ⏰ *HORARIO* · 🥙 *PEDIR*`;
    },

    ayuda() {
        return `🆘 *AYUDA — COMANDOS*\n`
            + `• *MENÚ* : Ver lista de ingredientes\n`
            + `• *SUGERIDAS* : Nuestras arepas favoritas\n`
            + `• *COMBOS* : Ofertas especiales\n`
            + `• *DELIVERY* : Info de entrega\n`
            + `• *UBICACION* : Dónde estamos\n`
            + `• *PEDIR* : Iniciar tu pedido`;
    }
};

module.exports = M;
