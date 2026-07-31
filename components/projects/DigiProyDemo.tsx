"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  ClipboardCheck,
  Search,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type DemoView = "login" | "dashboard";

const evaluations = [
  {
    plan: "Control de proceso",
    operation: "Producción",
    code: "F036",
    status: "Activo",
  },
  {
    plan: "Control de rendimiento",
    operation: "Congelado",
    code: "F021",
    status: "Activo",
  },
  {
    plan: "Control de temperatura",
    operation: "Calidad",
    code: "F014",
    status: "Activo",
  },
  {
    plan: "Control de utensilios",
    operation: "Operaciones",
    code: "F003",
    status: "Activo",
  },
];

const menuItems = [
  {
    label: "Evaluaciones",
    active: true,
  },
  {
    label: "Modelo de evaluación",
    active: false,
  },
  {
    label: "Planes",
    active: false,
  },
  {
    label: "Usuarios",
    active: false,
  },
  {
    label: "Configuración",
    active: false,
  },
];

function DigiProyLogo({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex items-center gap-1.5">
        <span className="text-[8px] font-medium tracking-[-0.04em] text-white/85">
          DIGI
        </span>
        <span className="text-[12px] font-black leading-none tracking-[-0.1em] text-white">
          PROY
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center text-[#3f7833]">
      <span className="mr-1 text-[12px] font-medium tracking-[-0.04em] sm:text-[17px]">
        DIGI
      </span>

      <span className="text-[26px] font-black leading-none tracking-[-0.1em] sm:text-[38px]">
        PR
      </span>

      <span className="relative mx-0.5 flex h-6 w-6 items-center justify-center sm:h-8 sm:w-8">
        <span className="absolute left-[1px] top-[5px] h-4 w-3 rotate-[34deg] rounded-[100%_0_100%_0] bg-[#4c843b] sm:h-5 sm:w-3.5" />
        <span className="absolute right-[1px] top-[5px] h-4 w-3 -rotate-[34deg] rounded-[0_100%_0_100%] bg-[#4c843b] sm:h-5 sm:w-3.5" />
        <span className="absolute top-0 h-2.5 w-1.5 rounded-t-full bg-[#4c843b]" />
      </span>

      <span className="text-[26px] font-black leading-none tracking-[-0.1em] sm:text-[38px]">
        Y
      </span>
    </div>
  );
}

 function LoginView({ onLogin }: { onLogin: () => void }) {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 850);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={handleLogin}
      className="
  relative
  h-[292px]
  overflow-hidden
  cursor-pointer
  transition-transform
  duration-300
  hover:scale-[1.01]
  sm:h-[260px]
"
    >
      <Image
        src="/digiproy-login.webp"
        alt="Login DigiProy"
        fill
        sizes="(max-width: 640px) 100vw, 760px"
        draggable={false}
        className="
  absolute
  inset-0
  h-full
  w-full
  object-cover
  rounded-[16px]
  select-none
  pointer-events-none
  transition-transform
  duration-300
  group-hover/demo:scale-[1.015]
"
      />

      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            absolute
            inset-0
            z-30
            flex
            items-center
            justify-center
            bg-black/20
            backdrop-blur-[2px]
          "
        >
          <div className="rounded-xl bg-black/60 px-5 py-4 text-white shadow-xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="mx-auto mb-3 h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
            />

            <p className="text-xs">Iniciando sesión...</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

function DashboardView({ onBack }: { onBack: () => void }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 22,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: 22,
      }}
      transition={{
        duration: 0.48,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full min-h-[220px] bg-[#f3f5f1] text-[#263128] sm:min-h-[250px]"
    >
      <header className="flex h-8 items-center justify-between bg-gradient-to-r from-[#2f7138] via-[#438e49] to-[#2d6a34] px-3 text-white">
        <div className="flex min-w-0 items-center gap-2.5">
          <DigiProyLogo compact />

          <span className="h-4 w-px bg-white/20" />

          <p className="truncate text-[8px] font-semibold sm:text-[9px]">
            Proyecto de digitalización QAS
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="hidden text-[7px] text-white/60 sm:inline">
            Planta de producción
          </span>

          <span className="flex items-center gap-1 text-[7px] font-semibold text-emerald-100">
            <motion.span
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="h-1.5 w-1.5 rounded-full bg-emerald-200 shadow-[0_0_8px_rgba(167,243,208,0.9)]"
            />

            Online
          </span>
        </div>
      </header>

      <div className="grid min-h-[184px] grid-cols-[84px_1fr] sm:min-h-[214px] sm:grid-cols-[110px_1fr]">
        <aside className="border-r border-[#3d6240]/12 bg-[#edf1ea]">
          <div className="border-b border-[#3d6240]/10 p-2">
            <div className="flex items-center gap-1.5 rounded-md border border-[#527856]/15 bg-white/70 px-2 py-1.5">
              <Search size={9} className="text-[#557058]/55" />

              <span className="truncate text-[7px] text-[#557058]/55">
                Buscar
              </span>
            </div>
          </div>

          <nav className="space-y-0.5 p-1.5">
            {menuItems.map((item, index) => {
              return (
                <motion.button
                  key={item.label}
                  type="button"
                  initial={{
                    opacity: 0,
                    x: -7,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.055,
                  }}
                  className={`flex w-full items-center gap-1.5 rounded-md border px-2 py-1.5 text-left transition ${
                    item.active
                      ? "border-[#397b40]/15 bg-[#397b40]/10 text-[#2f7138]"
                      : "border-transparent text-[#536456]/60 hover:bg-white/60 hover:text-[#375e3b]"
                  }`}
                >

                  <span className="truncate text-[7px] font-medium sm:text-[8px]">
                    {item.label}
                  </span>
                </motion.button>
              );
            })}
          </nav>
        </aside>

        <main className="min-w-0 bg-[#f6f7f4]" >
          <div className="flex h-7 items-end border-b border-[#4f6d51]/12 bg-[#e8ece5] px-2">
            <div className="flex h-6 items-center gap-1.5 rounded-t-md border border-b-0 border-[#3d7942]/16 bg-white px-2.5 text-[7px] font-semibold text-[#39733f] sm:text-[8px]">
              <ClipboardCheck size={9} />
              Evaluación
            </div>

            <button
              type="button"
              onClick={onBack}
              className="ml-auto mb-1.5 text-[1px] text-[#536456]/50 transition hover:text-[#39733f] "
            >
              Login
            </button>
          </div>

<div className="flex h-[20px] items-center gap-[3px] overflow-hidden border-b border-[#4f6d51]/10 bg-white px-2">
  {["Nuevo", "Editar", "Eliminar", "Resumen"].map((action, index) => (
    <motion.button
      key={action}
      type="button"
      initial={{
        opacity: 0,
        y: -3,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.08 + index * 0.05,
      }}
      style={{
        fontSize: "7px",
        lineHeight: "1",
      }}
      className="
        h-[13px]
        rounded-[2px]
        border
        border-[#55745a]/15
        bg-[#fafcf9]
        px-[4px]
        font-medium
        text-[#516454]/70
        transition
        hover:border-[#3e7c44]/25
        hover:bg-[#f3f7f2]
      "
    >
      {action}
    </motion.button>
  ))}

  <span
    style={{
      fontSize: "7px",
      lineHeight: "1",
    }}
    className="
      ml-auto
      flex
      h-[13px]
      items-center
      rounded-[2px]
      border
      border-[#397b40]/15
      bg-[#397b40]/8
      px-[4px]
      font-medium
      text-[#39733f]
    "
  >
    Habilitar evaluación
  </span>
</div>
          <div className="grid grid-cols-[1.25fr_0.7fr_0.4fr_0.48fr] border-b border-[#57715a]/12 bg-[#edf0eb] px-2 py-1.5 text-[6px] font-semibold uppercase tracking-[0.07em] text-[#667269]/65 sm:text-[7px]">
            <span>Plan de evaluación</span>
            <span>Operación</span>
            <span>Código</span>
            <span>Estado</span>
          </div>

          <div>
            {evaluations.map((evaluation, index) => (
              <motion.div
                key={evaluation.code}
                initial={{
                  opacity: 0,
                  x: 8,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.18 + index * 0.08,
                }}
                className={`relative grid grid-cols-[1.25fr_0.7fr_0.4fr_0.48fr] items-center border-b border-[#55715a]/8 px-2 py-2 text-[6px] transition hover:bg-[#397b40]/5 sm:text-[7px] ${
                  index === 1 ? "bg-[#397b40]/7" : "bg-white"
                }`}
              >
                {index === 1 && (
                  <motion.span
                    animate={{
                      opacity: [0.35, 1, 0.35],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute inset-y-0 left-0 w-[2px] bg-[#3d8745]"
                  />
                )}

                <span className="truncate pr-1 font-medium text-[#46534a]/80">
                  {evaluation.plan}
                </span>

                <span className="truncate text-[#657069]/65">
                  {evaluation.operation}
                </span>

                <span className="font-mono text-[#31713b]/75">
                  {evaluation.code}
                </span>

                <span className="flex items-center gap-1 text-[#397b40]/80">
                  <CheckCircle2 size={7} />
                  <span className="hidden sm:inline">{evaluation.status}</span>
                </span>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-between px-2 py-1.5 text-[6px] text-[#607064]/45 sm:text-[7px]">
            <span>Registros visibles: 4</span>

            <div className="flex items-center gap-1">
              {[1, 2, 3].map((page) => (
                <span
                  key={page}
                  className={`flex h-4 w-4 items-center justify-center rounded ${
                    page === 1
                      ? "bg-[#397b40]/12 text-[#39713e]"
                      : "text-[#647167]/45"
                  }`}
                >
                  {page}
                </span>
              ))}
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}

export default function DigiProyDemo() {
  const [view, setView] = useState<DemoView>("login");
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const interval = window.setInterval(() => {
      setView((current) => {
        return current === "login" ? "dashboard" : "login";
      });
    }, 6500);

    return () => {
      window.clearInterval(interval);
    };
  }, [autoPlay]);

  return (
    <div
      className="group/demo relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070a0e] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.34)] sm:p-4"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-emerald-500/[0.07] blur-[100px]" />

      <div className="relative mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-2.5">
          <motion.span
            animate={{
              opacity: [0.45, 1, 0.45],
              scale: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_11px_rgba(52,211,153,0.75)]"
          />

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-emerald-300 sm:text-[10px]">
              DigiProy · Camposol
            </p>

          </div>
          </div>

      <div className="hidden items-center gap-2 sm:flex">
  <motion.span
    animate={{
      opacity: [0.45, 1, 0.45],
      scale: [0.9, 1, 0.9],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
    }}
    className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_11px_rgba(52,211,153,0.75)]"
  />

  <span className="text-[8px] font-medium text-zinc-300">
    Producción
  </span>
</div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setView("login")}
            aria-label="Mostrar inicio de sesión"
            className={`h-1.5 rounded-full transition-all ${
              view === "login"
                ? "w-7 bg-emerald-400"
                : "w-1.5 bg-white/15 hover:bg-white/30"
            }`}
          />

          <button
            type="button"
            onClick={() => setView("dashboard")}
            aria-label="Mostrar panel administrativo"
            className={`h-1.5 rounded-full transition-all ${
              view === "dashboard"
                ? "w-7 bg-emerald-400"
                : "w-1.5 bg-white/15 hover:bg-white/30"
            }`}
          />
        </div>
      </div>

      <div className="relative">
<div className="
overflow-hidden
rounded-[24px]
border border-white/10
bg-[#0c0f13]
p-[10px]
shadow-[0_30px_80px_rgba(0,0,0,.45)]
">          

          <div className="
relative
overflow-hidden
rounded-[18px]
border
border-white/5
bg-black
">
            <AnimatePresence mode="wait">
              {view === "login" ? (
                <LoginView
                  key="login"
                  onLogin={() => setView("dashboard")}
                />
              ) : (
                <DashboardView
                  key="dashboard"
                  onBack={() => setView("login")}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
