import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * 3D card entrance + staggered content + mouse-move tilt.
 * Use refs: cardRef on the white card, contentRef on a wrapper that contains card's direct content (header, form, divider, footer).
 */
export function useAuthPageAnimations(cardRef, contentRef) {
  const tiltRef = useRef(null);

  useEffect(() => {
    const card = cardRef?.current;
    const content = contentRef?.current;
    if (!card || !content) return;

    const ctx = gsap.context(() => {
      // 3D card entrance: perspective, rotateY, scale, opacity
      gsap.fromTo(
        card,
        {
          opacity: 0,
          scale: 0.92,
          rotateY: -18,
          transformPerspective: 1200,
        },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 0.9,
          ease: 'power3.out',
          overwrite: true,
        }
      );

      // Stagger children (header, form, divider, footer)
      const children = content.children;
      if (children?.length) {
        gsap.fromTo(
          children,
          {
            opacity: 0,
            y: 24,
            rotateX: 12,
            transformPerspective: 800,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.6,
            stagger: 0.06,
            delay: 0.2,
            ease: 'power2.out',
            overwrite: true,
          }
        );
      }

      // Mouse-move 3D tilt on card (subtle)
      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const rotateY = x * 6;
        const rotateX = -y * 6;
        gsap.to(card, {
          rotateX,
          rotateY,
          transformPerspective: 1200,
          duration: 0.4,
          ease: 'power2.out',
          overwrite: true,
        });
      };
      const onLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.6,
          ease: 'power2.out',
          overwrite: true,
        });
      };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      tiltRef.current = { onMove, onLeave, card };
    });

    return () => {
      if (tiltRef.current) {
        const { card, onMove, onLeave } = tiltRef.current;
        card?.removeEventListener('mousemove', onMove);
        card?.removeEventListener('mouseleave', onLeave);
      }
      ctx.revert();
    };
  }, [cardRef, contentRef]);
}

/**
 * Add pro hover/click animation to a button (scale + slight 3D).
 * Pass the button ref and use in useEffect or call from parent.
 */
export function useButtonAnimation(buttonRef) {
  useEffect(() => {
    const el = buttonRef?.current;
    if (!el) return;

    const onEnter = () => {
      gsap.to(el, {
        scale: 1.02,
        boxShadow: '0 20px 25px -5px rgb(192 132 252 / 0.35), 0 8px 10px -6px rgb(192 132 252 / 0.2)',
        duration: 0.25,
        ease: 'power2.out',
      });
    };
    const onLeave = () => {
      gsap.to(el, {
        scale: 1,
        boxShadow: '',
        duration: 0.35,
        ease: 'power2.out',
      });
    };
    const onClick = () => {
      gsap.fromTo(el, { scale: 0.98 }, { scale: 1.02, duration: 0.3, ease: 'back.out(1.4)' });
    };

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('mousedown', onClick);
    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('mousedown', onClick);
    };
  }, [buttonRef]);
}

