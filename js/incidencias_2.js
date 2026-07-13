//Grafica Seguros

// --- NUEVA GRÁFICA PARA SEGUROS ---
const ctxSegurosTrend = document.getElementById('graficaValorSeguros');

if (ctxSegurosTrend) {
    new Chart(ctxSegurosTrend, {
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
            datasets: [
                {
                    // LÍNEA DE TENDENCIA (Calidad)
                    type: 'line',
                    label: 'Número de Incidencias en el Onboarding',
                    data: [250, 83, 117, 150, 183, 217, 50, 83, 117, 150, 183, 217, 50, 83, 117, 150, 183, 217, 50, 83, 117, 150, 183, 217, 50, 83, 117, 150, 183, 217],
                    borderColor: '#ffffff',
                    borderWidth: 3,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: '#0725e4',
                    pointBorderWidth: 4,
                    pointRadius: 8,
                    tension: 0.1, // Línea casi recta como tu imagen
                    zIndex: 2
                },
                {
                    // BARRA SUPERIOR (Rosa claro)
                    type: 'bar',
                    label: 'Clientes pendientes validar',
                    data: [250, 83, 117, 150, 183, 217, 50, 83, 117, 150, 183, 217, 50, 83, 117, 150, 183, 217, 50, 83, 117, 150, 183, 217, 50, 83, 117, 150, 183, 217],
                    backgroundColor: '#AB008F',
                    borderRadius: 0,
                },
                {
                    // BARRA INFERIOR (Rosa fuerte)
                    type: 'bar',
                    label: 'Clientes nuevos',
                    data: [50, 217, 83, 250, 117, 183, 50, 150, 217, 83, 183, 117, 250, 50, 150, 217, 117, 83, 183, 50, 250, 117, 150, 217, 83, 183, 50, 250, 117, 150],
                    backgroundColor: '#0a96fb',
                    borderRadius: 0,
                }
            ]

        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false } // En tu imagen no se ve leyenda
            },
            scales: {
                x: {
                    stacked: true,
                    grid: { display: false },
                    ticks: { color: '#fff', font: { family: 'Inter' } }
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    min: 0,
                    max: 500, // Ajustamos el máximo real del eje a 500
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: {
                        color: '#00f2ff',
                        font: { size: 12 },
                        // Forzamos a Chart.js a pasar por los múltiplos de 50 para que encuentre tus valores
                        stepSize: 50,
                        callback: function (value) {
                            // Definimos el array con los valores específicos que quieres mostrar
                            const valoresPermitidos = [0, 50, 100, 200, 300, 400, 500];

                            // Si el valor actual está en tu lista, lo muestra con el %; si no, lo oculta
                            if (valoresPermitidos.includes(value)) {
                                return value; // <--- Ahora solo devuelve el número, sin el '%'
                            }
                            return null; // Oculta las líneas intermedias (como 150, 250, etc.)
                        }
                    }
                }
            }
        }
    });
}

tailwind.config = {
    darkMode: "class",
    // ¡ESTO EVITA QUE TAILWIND DETECTE Y OCULTE EL MENÚ DE BOOTSTRAP!
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            "colors": {
                "primary-container": "#00d1ff",
                "on-secondary-fixed": "#3e001d",
                "outline": "#859399",
                "on-tertiary-fixed": "#00210c",
                "surface-container-highest": "#2f3639",
                "primary-fixed-dim": "#4cd6ff",
                "on-error": "#690005",
                "tertiary-fixed-dim": "#4ae183",
                "surface-bright": "#333a3d",
                "error-container": "#93000a",
                "outline-variant": "#3c494e",
                "on-tertiary-fixed-variant": "#005228",
                "surface-container": "#1a2123",
                "primary": "#a4e6ff",
                "background": "#0e1417",
                "secondary": "#ffb1c7",
                "inverse-primary": "#00677f",
                "on-primary-fixed": "#001f28",
                "surface-dim": "#0e1417",
                "on-tertiary": "#003919",
                "tertiary": "#64f797",
                "primary-fixed": "#b7eaff",
                "on-primary": "#003543",
                "secondary-fixed-dim": "#ffb1c7",
                "on-primary-container": "#00566a",
                "surface-container-high": "#242b2e",
                "surface": "#0e1417",
                "tertiary-container": "#42da7d",
                "tertiary-fixed": "#6bfe9c",
                "on-secondary-container": "#59002b",
                "inverse-surface": "#dde3e7",
                "on-secondary-fixed-variant": "#8e0049",
                "on-primary-fixed-variant": "#004e60",
                "surface-variant": "#2f3639",
                "surface-container-lowest": "#090f12",
                "on-surface-variant": "#bbc9cf",
                "on-error-container": "#ffdad6",
                "on-background": "#dde3e7",
                "on-tertiary-container": "#005b2c",
                "secondary-container": "#ff4994",
                "secondary-fixed": "#ffd9e2",
                "on-secondary": "#650032",
                "surface-tint": "#4cd6ff",
                "surface-container-low": "#161d1f",
                "on-surface": "#dde3e7",
                "inverse-on-surface": "#2b3134",
                "error": "#ffb4ab"
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "spacing": {
                "lg": "24px",
                "base": "4px",
                "margin-mobile": "16px",
                "xl": "32px",
                "md": "16px",
                "margin-desktop": "24px",
                "xs": "4px",
                "sm": "8px",
                "gutter": "16px"
            },
            "fontFamily": {
                "display-md": ["Geist"],
                "body-sm": ["Geist"],
                "body-lg": ["Geist"],
                "body-md": ["Geist"],
                "data-mono": ["Geist"],
                "label-caps": ["Geist"],
                "headline-sm": ["Geist"],
                "display-lg": ["Geist"]
            },
            "fontSize": {
                "display-md": ["24px", { "lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
                "body-sm": ["12px", { "lineHeight": "16px", "fontWeight": "400" }],
                "body-lg": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                "body-md": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
                "data-mono": ["14px", { "lineHeight": "20px", "fontWeight": "500" }],
                "label-caps": ["11px", { "lineHeight": "14px", "letterSpacing": "0.05em", "fontWeight": "600" }],
                "headline-sm": ["18px", { "lineHeight": "24px", "fontWeight": "500" }],
                "display-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "600" }]
            }
        },
    },
}


asesores.forEach(a => {
    document.write(`
                            <div class="bg-surface-container-low p-sm rounded-lg border border-white/5 flex flex-col items-center text-center space-y-sm hover:bg-surface-container transition-colors cursor-pointer group">
                                <div class="w-12 h-12 rounded-xl overflow-hidden mb-xs group-hover:ring-2 ring-primary ring-offset-2 ring-offset-background transition-all">
                                    <img src="${a.img}" 
                                         data-alt="A professional portrait of ${a.name}, a financial advisor. The image features clean, sharp studio lighting in a professional business setting. The aesthetic is consistent with a high-end corporate dashboard, utilizing a neutral and sophisticated color palette with subtle highlights of brand cyan." 
                                         class="w-full h-full object-cover">
                                </div>
                                <div>
                                    <h4 class="font-label-caps text-label-caps text-white">${a.name}</h4>
                                    <div class="flex items-center justify-center gap-xs text-[10px] text-outline mt-1">
                                        <span class="material-symbols-outlined text-[12px]">location_on</span>
                                        <span>${a.loc}</span>
                                    </div>
                                    <p class="text-[10px] text-primary-container mt-1 font-bold">${a.clients}</p>
                                </div>
                            </div>
                        `);
});

document.querySelectorAll('.funnel-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05) translateY(-4px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) translateY(0)';
    });
});



// =========================================================
// =      INTERACTIVIDAD Y DINAMISMO DE ASESORES (OXTRO)   =
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animación suave para las tarjetas del funnel/embudo
    document.querySelectorAll('.funnel-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05) translateY(-4px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1) translateY(0)';
        });
    });

    // 2. Micro-interacción del brillo (Glow) siguiendo al cursor en tarjetas Bento Grid
    document.querySelectorAll('.advisor-card-glow').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
    
});
