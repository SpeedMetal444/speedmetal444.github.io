/* ============================================================
   Portfolio – Hugo Abel Godoy | QA Automation Engineer
   JavaScript: i18n · Scroll Reveal · Mobile Nav · Smooth Scroll
   ============================================================ */

(function () {
    'use strict';

    // ==========================================================
    // 0. TRANSLATIONS OBJECT
    // ==========================================================
    var translations = {
        es: {
            logo: 'Hugo Abel Godoy',
            nav: {
                projects:   'Proyectos',
                stack:      'Stack',
                experience: 'Experiencia',
                contact:    'Contacto'
            },
            hero: {
                badge:    'QA Automation Engineer',
                title:    'Automatizo pruebas web y móviles con la profundidad técnica de un desarrollador.',
                subtitle: 'Especialista en Java, Selenium y Appium. Entiendo cómo se construye el software para diseñar estrategias de testing más efectivas, detectar bugs antes y colaborar mejor con los equipos de desarrollo.',
                cta1:     'Ver Proyectos',
                cta2:     'Contactar'
            },
            stack: {
                title: 'Stack Tecnológico',
                qa:    'Automatización & QA',
                dev:   'Desarrollo & Infraestructura'
            },
            projects: {
                title: 'Proyectos & Casos de Estudio',
                badge: { qa: 'QA Core', dev: 'Dev Insight' },
                link:  { code: 'Ver Código' },
                hardagenda: {
                    desc: '<strong>Problema:</strong> Gestión de turnos médicos sin sincronización en tiempo real entre escritorio y móvil.<br><strong>Solución:</strong> Arquitectura Cliente-Servidor con FastAPI y PostgreSQL. Sincronización de datos en vivo.<br><strong>Aprendizaje:</strong> Profundidad en APIs REST, concurrencia de bases de datos y validación de integridad.<br><strong>Valor QA:</strong> Diseño pruebas E2E que validan flujos críticos de datos y consistencia en sistemas distribuidos.'
                },
                hardagendaandroid: {
                    desc: '<strong>Problema:</strong> Necesidad de acceder al sistema de turnos desde móvil sin conexión directa a PostgreSQL.<br><strong>Solución:</strong> App nativa Android (Kotlin) consumiendo la misma API FastAPI que el cliente desktop.<br><strong>Aprendizaje:</strong> Arquitectura cliente-servidor móvil, consumo de APIs REST, manejo de red offline-first.<br><strong>Valor QA:</strong> Validación de contratos API desde cliente real, pruebas de integración mobile-backend y testing de sincronización.'
                },
                hardforms: {
                    desc: '<strong>Problema:</strong> Gestión manual de informes médicos y falta de estandarización en reportes.<br><strong>Solución:</strong> App de escritorio con generación dinámica de PDFs y gestión de imágenes.<br><strong>Aprendizaje:</strong> Lógica de negocio compleja, manipulación de archivos y validación de datos.<br><strong>Valor QA:</strong> Capacidad para probar flujos de negocio detallados y validar la integridad de reportes generados.'
                },
                inscar: {
                    desc: '<strong>Problema:</strong> Control ineficiente de pacientes y vigencias de planes de salud.<br><strong>Solución:</strong> Sistema de gestión con alertas automáticas y exportación de datos.<br><strong>Aprendizaje:</strong> Modelado de datos relacionales y lógica de validación de estados.<br><strong>Valor QA:</strong> Entendimiento de reglas de negocio para diseñar casos de prueba de validación robustos.'
                },
                tella: {
                    desc: '<strong>Problema:</strong> Falta de automatización en pruebas de regresión para aplicación móvil crítica.<br><strong>Solución:</strong> Suite E2E con Appium, Lippia y Docker. Ejecución en contenedores.<br><strong>Aprendizaje:</strong> Desafíos de automatización móvil, estabilidad de tests y CI/CD.<br><strong>Valor QA:</strong> Automatización de flujos críticos en Android, reduciendo tiempo de release y bugs en producción.'
                },
                lippiaweb: {
                    desc: '<strong>Problema:</strong> Necesidad de validar flujos completos de e-commerce (carrito, checkout) de forma automatizada.<br><strong>Solución:</strong> Framework BDD con Selenium, Cucumber y TestNG. Reportes ExtentReports.<br><strong>Aprendizaje:</strong> Patrones Page Object, BDD y generación de reportes ejecutables.<br><strong>Valor QA:</strong> Diseño de suites de pruebas escalables y mantenibles para regresión web continua.'
                },
                lippiaapi: {
                    desc: '<strong>Problema:</strong> Validación de contratos backend sin depender de la interfaz visual.<br><strong>Solución:</strong> Automatización de pruebas REST API con Lippia y Postman.<br><strong>Aprendizaje:</strong> Validación de respuestas JSON, códigos HTTP y estructura de datos.<br><strong>Valor QA:</strong> Pruebas de integración tempranas, detectando errores de servidor antes del frontend.'
                }
            },
            experience: {
                title: 'Experiencia Profesional',
                job1: {
                    date:    'Marzo 2026 – Actualidad',
                    role:    'QA Automation Engineer',
                    company: 'Horizontal – Proyecto Tella Mobile',
                    desc:    'Automatización de escenarios críticos de negocio para aplicaciones Android. Desarrollo y mantenimiento de suites de pruebas E2E utilizando Lippia y Appium. Colaboración en entornos ágiles (Scrum) para mejora continua de la calidad.'
                },
                job2: {
                    date:    'Diciembre 2017 – Actualidad',
                    role:    'Técnico Informático',
                    company: 'Softbrick y Hardbrick',
                    desc:    'Diagnóstico, reparación y mantenimiento preventivo/correctivo de hardware y software. Optimización de procesos de resolución de incidencias y recuperación de equipos.'
                }
            },
            education: {
                title: 'Educación',
                edu1: { title: 'Advanced QA Automation', school: 'Crowdar Academy' },
                edu2: { title: 'Análisis de Datos',         school: 'Platzi' },
                edu3: { title: 'Electrónica de Notebooks',  school: 'Marketech' }
            },
            footer: {
                title:     '¿Listo para mejorar la calidad de tu producto?',
                subtitle:  'Estoy disponible para nuevos desafíos como QA Automation Engineer.',
                copyright: '\u00A9 2026 Hugo Abel Godoy. Built with Vanilla.'
            },
            a11y: {
                openMenu:  'Abrir menú',
                closeMenu: 'Cerrar menú'
            },
            meta: {
                title:       'Hugo Abel Godoy | QA Automation Engineer',
                description: 'Portfolio de Hugo Abel Godoy - QA Automation Engineer especializado en automatización web y móvil con sólidos conocimientos de desarrollo de software.'
            }
        },
        en: {
            logo: 'Hugo Abel Godoy',
            nav: {
                projects:   'Projects',
                stack:      'Stack',
                experience: 'Experience',
                contact:    'Contact'
            },
            hero: {
                badge:    'QA Automation Engineer',
                title:    'I automate web and mobile tests with the technical depth of a developer.',
                subtitle: 'Specialist in Java, Selenium and Appium. I understand how software is built to design more effective testing strategies, detect bugs earlier, and collaborate better with development teams.',
                cta1:     'View Projects',
                cta2:     'Get in Touch'
            },
            stack: {
                title: 'Tech Stack',
                qa:    'Automation & QA',
                dev:   'Development & Infrastructure'
            },
            projects: {
                title: 'Projects & Case Studies',
                badge: { qa: 'QA Core', dev: 'Dev Insight' },
                link:  { code: 'View Code' },
                hardagenda: {
                    desc: '<strong>Problem:</strong> Medical appointment management without real-time sync between desktop and mobile.<br><strong>Solution:</strong> Client-Server architecture with FastAPI and PostgreSQL. Live data synchronization.<br><strong>Takeaway:</strong> Deep understanding of REST APIs, database concurrency, and integrity validation.<br><strong>QA Value:</strong> Designing E2E tests that validate critical data flows and consistency in distributed systems.'
                },
                hardagendaandroid: {
                    desc: '<strong>Problem:</strong> Need to access the appointment system from mobile without direct PostgreSQL connection.<br><strong>Solution:</strong> Native Android app (Kotlin) consuming the same FastAPI API as the desktop client.<br><strong>Takeaway:</strong> Mobile client-server architecture, REST API consumption, offline-first network handling.<br><strong>QA Value:</strong> Validating API contracts from a real client, mobile-backend integration testing, and synchronization testing.'
                },
                hardforms: {
                    desc: '<strong>Problem:</strong> Manual medical report management and lack of report standardization.<br><strong>Solution:</strong> Desktop app with dynamic PDF generation and image attachment management.<br><strong>Takeaway:</strong> Complex business logic, file handling, and data validation.<br><strong>QA Value:</strong> Ability to test detailed business flows and validate the integrity of generated reports.'
                },
                inscar: {
                    desc: '<strong>Problem:</strong> Inefficient patient control and health plan expiry tracking.<br><strong>Solution:</strong> Management system with automatic alerts and data export.<br><strong>Takeaway:</strong> Relational data modeling and state validation logic.<br><strong>QA Value:</strong> Understanding business rules to design robust validation test cases.'
                },
                tella: {
                    desc: '<strong>Problem:</strong> Lack of automation in regression testing for a critical mobile app.<br><strong>Solution:</strong> E2E suite with Appium, Lippia, and Docker. Containerized execution.<br><strong>Takeaway:</strong> Mobile automation challenges, test stability, and CI/CD integration.<br><strong>QA Value:</strong> Automating critical flows on Android, reducing release time and production bugs.'
                },
                lippiaweb: {
                    desc: '<strong>Problem:</strong> Need to validate complete e-commerce flows (cart, checkout) in an automated way.<br><strong>Solution:</strong> BDD framework with Selenium, Cucumber, and TestNG. ExtentReports reporting.<br><strong>Takeaway:</strong> Page Object patterns, BDD, and executable report generation.<br><strong>QA Value:</strong> Designing scalable and maintainable test suites for continuous web regression.'
                },
                lippiaapi: {
                    desc: '<strong>Problem:</strong> Backend contract validation without relying on the visual interface.<br><strong>Solution:</strong> REST API test automation with Lippia and Postman.<br><strong>Takeaway:</strong> JSON response validation, HTTP status codes, and data structure verification.<br><strong>QA Value:</strong> Early integration testing, catching server errors before the frontend.'
                }
            },
            experience: {
                title: 'Professional Experience',
                job1: {
                    date:    'March 2026 – Present',
                    role:    'QA Automation Engineer',
                    company: 'Horizontal – Tella Mobile Project',
                    desc:    'Automation of critical business scenarios for Android applications. Development and maintenance of E2E test suites using Lippia and Appium. Collaboration in agile environments (Scrum) for continuous quality improvement.'
                },
                job2: {
                    date:    'December 2017 – Present',
                    role:    'IT Technician',
                    company: 'Softbrick & Hardbrick',
                    desc:    'Hardware and software diagnosis, repair, and preventive/corrective maintenance. Optimization of incident resolution processes and equipment recovery.'
                }
            },
            education: {
                title: 'Education',
                edu1: { title: 'Advanced QA Automation', school: 'Crowdar Academy' },
                edu2: { title: 'Data Analysis',           school: 'Platzi' },
                edu3: { title: 'Notebook Electronics',    school: 'Marketech' }
            },
            footer: {
                title:     'Ready to improve your product quality?',
                subtitle:  'I am available for new challenges as a QA Automation Engineer.',
                copyright: '\u00A9 2026 Hugo Abel Godoy. Built with Vanilla.'
            },
            a11y: {
                openMenu:  'Open menu',
                closeMenu: 'Close menu'
            },
            meta: {
                title:       'Hugo Abel Godoy | QA Automation Engineer',
                description: 'Hugo Abel Godoy – QA Automation Engineer specialized in web and mobile test automation with solid software development knowledge.'
            }
        }
    };

    // ==========================================================
    // 1. I18N ENGINE
    // ==========================================================
    var STORAGE_KEY = 'portfolio-lang';
    var currentLang = 'es';

    function getNestedValue(obj, path) {
        return path.split('.').reduce(function (acc, key) {
            return acc && acc[key] !== undefined ? acc[key] : undefined;
        }, obj);
    }

    function applyTranslations(lang) {
        var t = translations[lang];
        if (!t) return;

        // Set <html lang>
        document.documentElement.lang = lang;

        // Update meta tags
        var metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', t.meta.description);
        document.title = t.meta.title;

        // Update all elements with data-i18n
        var elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            var value = getNestedValue(t, key);
            if (value === undefined) return;

            // If value contains HTML (project descriptions), use innerHTML
            if (typeof value === 'string' && (value.indexOf('<br') !== -1 || value.indexOf('<strong') !== -1)) {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        });

        // Update aria-labels on nav-toggle
        var navToggle = document.getElementById('nav-toggle');
        if (navToggle) {
            var isOpen = navToggle.classList.contains('open');
            if (isOpen) {
                navToggle.setAttribute('aria-label', t.a11y.closeMenu);
            } else {
                navToggle.setAttribute('aria-label', t.a11y.openMenu);
            }
        }

        // Update aria-labels on lang buttons
        var langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(function (btn) {
            var btnLang = btn.getAttribute('data-lang');
            if (btnLang === 'es') btn.setAttribute('aria-label', 'Español');
            if (btnLang === 'en') btn.setAttribute('aria-label', 'English');
        });
    }

    function setLanguage(lang) {
        if (lang !== 'es' && lang !== 'en') return;
        currentLang = lang;
        applyTranslations(lang);
        localStorage.setItem(STORAGE_KEY, lang);
        updateLangSwitchUI(lang);
    }

    function updateLangSwitchUI(lang) {
        var buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(function (btn) {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
    }

    function detectBrowserLang() {
        var navLang = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
        return navLang === 'en' ? 'en' : 'es';
    }

    function initLanguage() {
        // Priority: 1. localStorage  2. Browser detection  3. Default ES
        var stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'es' || stored === 'en') {
            setLanguage(stored);
        } else {
            var detected = detectBrowserLang();
            setLanguage(detected);
        }
    }

    // Language switch buttons
    var langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Initialize i18n
    initLanguage();

    // ==========================================================
    // 2. MOBILE MENU TOGGLE
    // ==========================================================
    var navbar   = document.getElementById('navbar');
    var navToggle = document.getElementById('nav-toggle');
    var navMenu  = document.getElementById('nav-menu');
    var navLinks = document.querySelectorAll('.nav-link');
    var sections = document.querySelectorAll('section[id], header[id]');
    var backdropEl = null;

    function createBackdrop() {
        backdropEl = document.createElement('div');
        backdropEl.className = 'nav-backdrop';
        backdropEl.addEventListener('click', closeMenu);
        document.body.appendChild(backdropEl);
    }

    function openMenu() {
        navToggle.classList.add('open');
        navMenu.classList.add('open');
        if (backdropEl) backdropEl.classList.add('visible');
        navToggle.setAttribute('aria-label', translations[currentLang].a11y.closeMenu);
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
        if (backdropEl) backdropEl.classList.remove('visible');
        navToggle.setAttribute('aria-label', translations[currentLang].a11y.openMenu);
        document.body.style.overflow = '';
    }

    function toggleMenu() {
        if (navMenu.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    createBackdrop();
    navToggle.addEventListener('click', toggleMenu);

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navMenu.classList.contains('open')) {
                closeMenu();
            }
        });
    });

    // ==========================================================
    // 3. NAVBAR SCROLL STATE
    // ==========================================================
    function updateNavbarState() {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateNavbarState, { passive: true });
    updateNavbarState();

    // ==========================================================
    // 4. ACTIVE NAV LINK
    // ==========================================================
    function highlightNavLink() {
        var currentId = '';

        sections.forEach(function (section) {
            var rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentId = section.getAttribute('id');
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentId) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink, { passive: true });
    highlightNavLink();

    // ==========================================================
    // 5. SCROLL REVEAL
    // ==========================================================
    var revealElements = document.querySelectorAll(
        '.section-title, .stack-column, .project-card, .timeline-item, .education-item, .footer-container > *'
    );

    function addRevealClasses() {
        revealElements.forEach(function (el, index) {
            el.classList.add('reveal');
            if (el.classList.contains('project-card')) {
                el.style.transitionDelay = (index % 6) * 0.1 + 's';
            }
        });
    }

    function revealOnScroll() {
        var windowHeight = window.innerHeight;
        var revealPoint  = 120;

        revealElements.forEach(function (el) {
            var rect = el.getBoundingClientRect();
            if (rect.top < windowHeight - revealPoint) {
                el.classList.add('visible');
            }
        });
    }

    addRevealClasses();

    window.addEventListener('scroll', revealOnScroll, { passive: true });
    window.addEventListener('load', revealOnScroll);
    revealOnScroll();

    // ==========================================================
    // 6. SMOOTH SCROLL
    // ==========================================================
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();

            var offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
            var navHeight = 56;

            window.scrollTo({
                top:      offsetTop - navHeight - 16,
                behavior: 'smooth'
            });
        });
    });

})();