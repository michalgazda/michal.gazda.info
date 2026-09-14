export const languages = {
  en: 'English',
  pl: 'Polski',
};

export const defaultLang = 'pl';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.subtitle': "Hello, I'm",
    'hero.title': 'Michał Gazda',
    'hero.desc': 'Principal Software Engineer',
    'hero.cta': 'Contact me',
    'about.title': 'About Me',
    'about.subtitle': "Hi There! I'm Michał Gazda",
    'about.desc': 'I am passionate about technology, software development, quality and plenty other engineering topics.',
    'about.location': 'Location:',
    'about.location_val': 'Krakow, Poland',
    'skill.java': 'Java',
    'skill.aws': 'Aws',
    'skill.k8s': 'Kubernetes',
    'skill.other': 'Other',
    'contact.title': 'Get In Touch',
    'contact.desc_before': 'Best way to reach me would be my',
    'contact.desc_link': 'LinkedIn',
    'contact.desc_after': '.',
    'contact.address': 'Address',
    'contact.address_val': 'Krakow, Poland',
    'footer.copyright': 'Copyright © 2025. Crafted by',
    'footer.author': 'Michał Gazda',
    'lang.label': 'PL',
  },
  pl: {
    'nav.home': 'Strona główna',
    'nav.about': 'O mnie',
    'nav.contact': 'Kontakt',
    'hero.subtitle': 'Cześć, jestem',
    'hero.title': 'Michał Gazda',
    'hero.desc': 'Principal Software Engineer',
    'hero.cta': 'Skontaktuj się',
    'about.title': 'O mnie',
    'about.subtitle': 'Cześć! Jestem Michał Gazda',
    'about.desc': 'Pasjonuję się technologią, tworzeniem oprogramowania, jakością i wieloma innymi tematami inżynieryjnymi.',
    'about.location': 'Lokalizacja:',
    'about.location_val': 'Kraków, Polska',
    'skill.java': 'Java',
    'skill.aws': 'AWS',
    'skill.k8s': 'Kubernetes',
    'skill.other': 'Inne',
    'contact.title': 'Kontakt',
    'contact.desc_before': 'Najlepiej skontaktować się ze mną przez',
    'contact.desc_link': 'LinkedIn',
    'contact.desc_after': '.',
    'contact.address': 'Adres',
    'contact.address_val': 'Kraków, Polska',
    'footer.copyright': 'Copyright © 2025. Wykonane przez',
    'footer.author': 'Michał Gazda',
    'lang.label': 'EN',
  },
} as const;

export type Language = keyof typeof languages;

export function useTranslations(lang: Language) {
  return function t(key: keyof typeof ui['en']) {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}