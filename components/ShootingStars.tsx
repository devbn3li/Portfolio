"use client";
import { useEffect, useRef, useState } from "react";
import "./ShootingStars.css";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
  size: number;
  tailLength: number;
}

export default function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const lastSpawnRef = useRef(0);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
    // Check if mobile
    setIsMobile(window.innerWidth < 768); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  // Canvas-based shooting stars animation - disabled on mobile for performance
  useEffect(() => {
    if (!mounted || isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const spawnShootingStar = () => {
      const star: ShootingStar = {
        id: Date.now(),
        x: Math.random() * canvas.width * 0.8,
        y: -20,
        angle: Math.PI / 4 + (Math.random() * 0.3 - 0.15),
        speed: 8 + Math.random() * 4,
        size: 2 + Math.random() * 2,
        tailLength: 80 + Math.random() * 60,
      };
      shootingStarsRef.current.push(star);
    };

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn new shooting star every 8-12 seconds
      if (timestamp - lastSpawnRef.current > 10000) {
        if (shootingStarsRef.current.length === 0) {
          spawnShootingStar();
          lastSpawnRef.current = timestamp;
        }
      }

      // Update and draw shooting stars
      shootingStarsRef.current = shootingStarsRef.current.filter((star) => {
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;

        if (star.x > canvas.width + 100 || star.y > canvas.height + 100) {
          return false;
        }

        // Draw the tail
        const tailX = star.x - Math.cos(star.angle) * star.tailLength;
        const tailY = star.y - Math.sin(star.angle) * star.tailLength;

        const gradient = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
        gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
        gradient.addColorStop(0.4, "rgba(255, 255, 255, 0.2)");
        gradient.addColorStop(0.8, "rgba(255, 255, 255, 0.6)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 1)");

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = star.size;
        ctx.lineCap = "round";
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(star.x, star.y);
        ctx.stroke();

        // Draw the head glow
        ctx.beginPath();
        const headGradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 4
        );
        headGradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        headGradient.addColorStop(0.3, "rgba(255, 255, 255, 0.8)");
        headGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = headGradient;
        ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      requestAnimationFrame(animate);
    };

    setTimeout(spawnShootingStar, 3000);
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [mounted, isMobile]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Parallax star layers - space travel effect */}
      <div className="stars-container">
        <div className="stars-layer-1" />
        <div className="stars-layer-2" />
        <div className="stars-layer-3" />
      </div>

      {/* Canvas for shooting stars - only on desktop */}
      {!isMobile && (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      )}
    </div>
  );
}
