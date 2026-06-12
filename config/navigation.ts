interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

interface NavigationConfig {
  mainNav: NavItem[];
}

export const navigationConfig: NavigationConfig = {
  mainNav: [
    { title: "Home",    href: "/" },
    { title: "Explore", href: "/explore" },
    { title: "About",   href: "/about" },
  ],
};
