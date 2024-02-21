export const scrollToSection = (sectionId : string, updateSection : any) => {
    updateSection(sectionId);
  
    const sectionToScroll = document.getElementById(sectionId);
    if (sectionToScroll) {
      sectionToScroll.scrollIntoView({ behavior: 'smooth' });
    }
};