// ========== PRELOADER ==========
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('oculto');
            document.body.style.overflow = '';
        }
    }, 1200);
});
document.body.style.overflow = 'hidden';

// ========== CURSOR CUSTOMIZADO ==========
const cursorCustom = document.getElementById('cursor-custom');
const cursorDot = document.getElementById('cursor-dot');

if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
        if (cursorCustom && cursorDot) {
            cursorCustom.style.left = e.clientX + 'px';
            cursorCustom.style.top = e.clientY + 'px';
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
        }
    });
    
    // Efeito de clique
    document.addEventListener('mousedown', () => {
        if (cursorCustom) {
            cursorCustom.style.transform = 'translate(-50%, -50%) scale(0.8)';
            cursorCustom.style.borderColor = 'var(--verde-limao)';
        }
    });
    
    document.addEventListener('mouseup', () => {
        if (cursorCustom) {
            cursorCustom.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorCustom.style.borderColor = 'var(--dourado)';
        }
    });
}

// ========== CANVAS DE PARTÍCULAS ==========
const canvas = document.getElementById('canvas-particulas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particulas = [];
    const maxParticulas = 70;

    function redimensionarCanvas() {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    }
    
    redimensionarCanvas();
    window.addEventListener('resize', redimensionarCanvas);

    class Particula {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + Math.random() * 200;
            this.tamanho = Math.random() * 4 + 1.5;
            this.velocidadeY = -(Math.random() * 1.2 + 0.4);
            this.velocidadeX = (Math.random() - 0.5) * 0.6;
            this.opacidade = Math.random() * 0.7 + 0.15;
            this.tipo = Math.random() > 0.5 ? 'folha' : 'luz';
            this.rotacao = Math.random() * Math.PI * 2;
            this.velocidadeRotacao = (Math.random() - 0.5) * 0.02;
        }
        
        atualizar() {
            this.y += this.velocidadeY;
            this.x += this.velocidadeX + Math.sin(this.y * 0.01) * 0.3;
            this.rotacao += this.velocidadeRotacao;
            
            if (this.y < -60 || this.x < -60 || this.x > canvas.width + 60) {
                this.reset();
                this.y = canvas.height + Math.random() * 100;
            }
        }
        
        desenhar() {
            ctx.save();
            ctx.globalAlpha = this.opacidade;
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotacao);
            
            if (this.tipo === 'folha') {
                ctx.fillStyle = '#52b788';
                ctx.beginPath();
                ctx.ellipse(0, 0, this.tamanho, this.tamanho * 1.6, 0, 0, Math.PI * 2);
                ctx.fill();
                
                // Detalhe da folha (nervura)
                ctx.strokeStyle = '#40916c';
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(0, -this.tamanho * 1.6);
                ctx.lineTo(0, this.tamanho * 1.6);
                ctx.stroke();
            } else {
                ctx.fillStyle = '#f5d78c';
                ctx.shadowColor = '#f5d78c';
                ctx.shadowBlur = 8;
                ctx.beginPath();
                ctx.arc(0, 0, this.tamanho * 0.7, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            }
            
            ctx.restore();
        }
    }

    // Criar partículas iniciais
    for (let i = 0; i < maxParticulas; i++) {
        const p = new Particula();
        p.y = Math.random() * canvas.height;
        particulas.push(p);
    }

    function animarCanvas() {
        if (!canvas || !ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particulas.forEach(p => {
            p.atualizar();
            p.desenhar();
        });
        requestAnimationFrame(animarCanvas);
    }
    
    animarCanvas();
}

// ========== EFEITO TILT 3D NOS CARDS ==========
document.querySelectorAll('[data-tilt]').forEach(card => {
    const inner = card.querySelector('.card-3d-inner');
    if (!inner) return;
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centroX = rect.width / 2;
        const centroY = rect.height / 2;
        const rotacaoY = ((x - centroX) / centroX) * 12;
        const rotacaoX = -((y - centroY) / centroY) * 12;
        
        inner.style.transform = `perspective(800px) rotateX(${rotacaoX}deg) rotateY(${rotacaoY}deg) scale(1.03)`;
        inner.style.boxShadow = `0 25px 55px rgba(0,0,0,0.2), ${rotacaoY/2}px ${rotacaoX/2}px 30px rgba(0,0,0,0.1)`;
    });
    
    card.addEventListener('mouseleave', () => {
        inner.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
        inner.style.boxShadow = '0 8px 40px rgba(0,0,0,0.15)';
    });
});

// ========== CONTADORES ANIMADOS ==========
function animarContadores() {
    document.querySelectorAll('.estatistica-numero[data-alvo]').forEach(el => {
        if (el.dataset.animado === 'true') return;
        el.dataset.animado = 'true';
        
        const alvo = parseFloat(el.dataset.alvo);
        const sufixo = el.dataset.sufixo || '';
        const decimal = el.dataset.decimal === 'true';
        const duracao = 2200;
        const inicio = performance.now();
        const valorInicial = 0;

        function atualizar(timestamp) {
            const progresso = Math.min((timestamp - inicio) / duracao, 1);
            const ease = 1 - Math.pow(1 - progresso, 3);
            let valorAtual = valorInicial + (alvo - valorInicial) * ease;
            
            if (decimal) {
                el.textContent = valorAtual.toFixed(1) + ' ' + sufixo;
            } else {
                el.textContent = Math.round(valorAtual) + sufixo;
            }
            
            if (progresso < 1) {
                requestAnimationFrame(atualizar);
            } else {
                el.textContent = (decimal ? alvo.toFixed(1) : alvo) + (sufixo ? ' ' + sufixo : sufixo);
                // Pequena animação de pulsar ao finalizar
                el.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    el.style.transform = 'scale(1)';
                }, 200);
            }
        }
        
        requestAnimationFrame(atualizar);
    });
}

const observadorContadores = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animarContadores();
            observadorContadores.unobserve(entry.target);
        }
    });
}, { threshold: 0.4 });

const secaoEstatisticas = document.querySelector('.secao-estatisticas');
if (secaoEstatisticas) {
    observadorContadores.observe(secaoEstatisticas);
}

// ========== SLIDER DE CASES ==========
const sliderTrack = document.getElementById('sliderTrack');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const dotsContainer = document.getElementById('sliderDots');

if (sliderTrack && btnPrev && btnNext && dotsContainer) {
    const slides = document.querySelectorAll('.slider-slide');
    let slideAtual = 0;
    const totalSlides = slides.length;

    // Criar dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.classList.add('slider-dot');
        if (i === 0) dot.classList.add('ativo');
        dot.setAttribute('aria-label', `Slide ${i + 1}`);
        dot.addEventListener('click', () => irParaSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    const dots = document.querySelectorAll('.slider-dot');

    function irParaSlide(index) {
        slideAtual = index;
        if (sliderTrack) {
            sliderTrack.style.transform = `translateX(-${slideAtual * 100}%)`;
        }
        dots.forEach((d, i) => d.classList.toggle('ativo', i === slideAtual));
    }

    btnPrev.addEventListener('click', () => {
        slideAtual = (slideAtual - 1 + totalSlides) % totalSlides;
        irParaSlide(slideAtual);
    });
    
    btnNext.addEventListener('click', () => {
        slideAtual = (slideAtual + 1) % totalSlides;
        irParaSlide(slideAtual);
    });

    // Auto-slide
    let autoSlide = setInterval(() => {
        slideAtual = (slideAtual + 1) % totalSlides;
        irParaSlide(slideAtual);
    }, 5000);
    
    const sliderContainer = document.getElementById('slider');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
        sliderContainer.addEventListener('mouseleave', () => {
            autoSlide = setInterval(() => {
                slideAtual = (slideAtual + 1) % totalSlides;
                irParaSlide(slideAtual);
            }, 5000);
        });
    }

    // Suporte a touch/swipe
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (sliderContainer) {
        sliderContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        sliderContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    // Swipe left - próximo
                    slideAtual = (slideAtual + 1) % totalSlides;
                } else {
                    // Swipe right - anterior
                    slideAtual = (slideAtual - 1 + totalSlides) % totalSlides;
                }
                irParaSlide(slideAtual);
            }
        });
    }
}

// ========== NAVEGAÇÃO STICKY ==========
const nav = document.getElementById('nav');
let ultimoScroll = 0;

window.addEventListener('scroll', () => {
    const scrollAtual = window.scrollY;
    
    if (nav) {
        if (scrollAtual > 150) {
            nav.classList.add('reduzida');
        } else {
            nav.classList.remove('reduzida');
        }
        
        // Destacar link ativo
        document.querySelectorAll('.nav-links a').forEach(link => {
            const secao = document.querySelector(link.getAttribute('href'));
            if (secao) {
                const rect = secao.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= 120) {
                    link.classList.add('ativo');
                } else {
                    link.classList.remove('ativo');
                }
            }
        });
    }
    
    ultimoScroll = scrollAtual;
});

// ========== ROLAGEM SUAVE PARA LINKS INTERNOS ==========
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            e.preventDefault();
            destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ========== BOTÃO VOLTAR AO TOPO ==========
const btnTopo = document.getElementById('btnTopo');

if (btnTopo) {
    window.addEventListener('scroll', () => {
        btnTopo.classList.toggle('visivel', window.scrollY > 600);
    });
    
    btnTopo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========== SCROLL REVEAL GERAL ==========
const revelarObservador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(
    '.card-3d, .balanca-prato, .timeline-item, .estatistica-item, .slider-slide, .cta-final, .secao-titulo'
).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    revelarObservador.observe(el);
});

// Revelar imediatamente elementos já visíveis
setTimeout(() => {
    document.querySelectorAll(
        '.card-3d, .balanca-prato, .timeline-item, .estatistica-item, .slider-slide, .cta-final, .secao-titulo'
    ).forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
}, 300);

// ========== ANIMAÇÃO DE ENTRADA DO HERO ==========
window.addEventListener('load', () => {
    const heroConteudo = document.querySelector('.hero-conteudo');
    if (heroConteudo) {
        heroConteudo.style.opacity = '0';
        heroConteudo.style.transform = 'translateY(30px)';
        heroConteudo.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
        
        setTimeout(() => {
            heroConteudo.style.opacity = '1';
            heroConteudo.style.transform = 'translateY(0)';
        }, 500);
    }
});

// ========== EFEITO PARALLAX SUAVE NO SCROLL ==========
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    
    // Parallax nas partículas do hero
    const canvas = document.getElementById('canvas-particulas');
    if (canvas) {
        canvas.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    // Parallax nos brilhos do hero
    document.querySelectorAll('.hero-brilho').forEach(brilho => {
        const speed = brilho.classList.contains('verde') ? 0.15 : 0.1;
        brilho.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========== DETECTAR SUPORTE A BACKDROP-FILTER ==========
const suportaBackdrop = CSS.supports('backdrop-filter', 'blur(10px)') || 
                        CSS.supports('-webkit-backdrop-filter', 'blur(10px)');

if (!suportaBackdrop) {
    // Fallback para navegadores que não suportam backdrop-filter
    document.querySelectorAll('.nav-principal, .hero-selo, .btn-secundario').forEach(el => {
        el.style.background = 'rgba(10, 31, 20, 0.9)';
    });
}

// ========== CONSOLE MESSAGE ==========
console.log('🌱 Agrinho 2026 — Projeto carregado com sucesso!');
console.log('🏆 Tema: Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente');
console.log('💚 Desenvolvido com excelência para vencer!');
console.log('📊 Performance otimizada com JavaScript puro (Vanilla JS)');