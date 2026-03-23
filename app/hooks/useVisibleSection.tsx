'use client'

import { useEffect, useState } from "react";

export function useVisibleSection(sectionIds: string[]) {
  const [visibleSectionId, setVisibleSectionId] = useState<string | undefined>();

  const isSectionVisible = (elementId: string) => {
    const section = document.getElementById(elementId);

    if (section) {
      const sectionPosition = section.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      return (
        sectionPosition.top <= viewHeight / 2 &&
        sectionPosition.bottom >= viewHeight / 2
      );
    }
    return false;
  };

  const checkVisiblility = () => {
    sectionIds.forEach(id => {
      if (isSectionVisible(id)) {        
        setVisibleSectionId(id);
      }
    })
  };

  useEffect(() => {
    if (sectionIds) {
      window.addEventListener('scroll', checkVisiblility);
    }

    checkVisiblility();

    return () => 
      window.removeEventListener('scroll', checkVisiblility);
  }, []);

  return visibleSectionId;
}