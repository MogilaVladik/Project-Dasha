"use client";

import React from "react";
import {
  ArtDecoOrnament,
  GeometricDivider,
} from "@/components/ArtDecoOrnament";
import { ArtDecoCard } from "@/components/ArtDecoCard";
import { BottomNav } from "@/components/BottomNav";

const features = [
  "Полный доступ ко всем статьям и архиву",
  "Все эпизоды подкастов без рекламы",
  "Ранний доступ к новым выпускам",
  "Эксклюзивные материалы и интервью",
  "PDF-версии всех изданий",
  "Приоритетная техподдержка",
];

const plans = [
  {
    name: "Квартальная",
    price: "4 990",
    period: "3 месяца",
    description: "Один выпуск журнала и все материалы квартала",
    popular: false,
  },
  {
    name: "Годовая",
    price: "16 990",
    period: "год",
    description: "Все четыре выпуска и годовой архив материалов",
    popular: true,
    savings: "Экономия 2 970 ₽",
  },
];

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-ivory pb-24" data-oid="165qvyj">
      {/* Header */}
      <header
        className="bg-navy pt-8 pb-6 px-6 border-b-2 border-gold/40"
        data-oid="kz7n:k6"
      >
        <div className="max-w-2xl mx-auto" data-oid="2ffo8iy">
          <ArtDecoOrnament className="mb-4" data-oid="1m95t5g" />
          <h1
            className="font-display text-3xl font-bold tracking-luxury text-center mb-2"
            data-oid="cwbmfs9"
          >
            <span className="gold-gradient-text" data-oid="j8o9qoj">
              ПОДПИСКА
            </span>
          </h1>
          <p
            className="font-serif text-ivory/80 text-center text-sm tracking-wide"
            data-oid="xr8h7jm"
          >
            Премиальный доступ к контенту
          </p>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-8 space-y-8" data-oid="mc5bj51">
        {/* Introduction */}
        <section className="text-center space-y-4" data-oid=":8o03_m">
          <h2
            className="font-display text-2xl font-semibold text-navy"
            data-oid="na16gt3"
          >
            Присоединяйтесь к сообществу
            <br data-oid="3hh2-2." />
            профессионалов ритейла
          </h2>
          <p
            className="font-serif text-navy/70 text-base leading-relaxed max-w-xl mx-auto"
            data-oid="wl9lmeq"
          >
            Получите неограниченный доступ к экспертной аналитике, эксклюзивным
            интервью и материалам от лидеров индустрии.
          </p>
        </section>

        <GeometricDivider data-oid=".u_7_q4" />

        {/* Subscription Plans */}
        <section className="space-y-4" data-oid="450.f-p">
          {plans.map((plan) => (
            <SubscriptionPlan key={plan.name} plan={plan} data-oid="eqov4._" />
          ))}
        </section>

        <GeometricDivider data-oid="3n.vzt4" />

        {/* Features */}
        <section data-oid="4b_1i1i">
          <h3
            className="font-display text-xl font-semibold text-navy text-center mb-6"
            data-oid="3j4t8jy"
          >
            ЧТО ВХОДИТ В ПОДПИСКУ
          </h3>

          <ArtDecoCard
            variant="bordered"
            showCorners={false}
            data-oid="bbv7rvz"
          >
            <div className="space-y-4" data-oid=".h19ak6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                  data-oid="sowmoa5"
                >
                  <div className="flex-shrink-0 mt-1" data-oid="i2wi2ih">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      data-oid="1cud5p7"
                    >
                      <path
                        d="M4 10L8 14L16 6"
                        stroke="#D4AF37"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-oid="w.mfqa-"
                      />
                    </svg>
                  </div>
                  <span
                    className="font-serif text-navy/80 leading-relaxed"
                    data-oid="6gn6prl"
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </ArtDecoCard>
        </section>

        {/* Trust Indicators */}
        <section className="pt-4" data-oid="n9gr0._">
          <div
            className="grid grid-cols-3 gap-4 text-center"
            data-oid="rjow1t."
          >
            <div className="space-y-2" data-oid="acr:qi1">
              <div
                className="font-display text-3xl font-bold text-gold"
                data-oid="bt.04nd"
              >
                2500+
              </div>
              <div
                className="font-serif text-xs text-navy/60 uppercase tracking-wide"
                data-oid="ymkop9v"
              >
                Подписчиков
              </div>
            </div>
            <div className="space-y-2" data-oid="p2bkcfn">
              <div
                className="font-display text-3xl font-bold text-gold"
                data-oid="n.ww_0h"
              >
                48
              </div>
              <div
                className="font-serif text-xs text-navy/60 uppercase tracking-wide"
                data-oid="bvu.r7w"
              >
                Выпусков
              </div>
            </div>
            <div className="space-y-2" data-oid="4saopyb">
              <div
                className="font-display text-3xl font-bold text-gold"
                data-oid="-pl45_u"
              >
                3
              </div>
              <div
                className="font-serif text-xs text-navy/60 uppercase tracking-wide"
                data-oid="a6n0x21"
              >
                Года
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section data-oid="81tu:ty">
          <h3
            className="font-display text-xl font-semibold text-navy text-center mb-6"
            data-oid="qf8wn47"
          >
            ЧАСТЫЕ ВОПРОСЫ
          </h3>

          <div className="space-y-3" data-oid="l.jsus6">
            <FAQItem
              question="Можно ли отменить подписку?"
              answer="Да, вы можете отменить автопродление в любой момент. Доступ сохранится до конца оплаченного периода."
              data-oid="9w06v5j"
            />

            <FAQItem
              question="Доступны ли материалы офлайн?"
              answer="Да, вы можете скачать PDF-версии всех выпусков и читать их без интернета."
              data-oid="c3qzwl7"
            />

            <FAQItem
              question="Есть ли корпоративные подписки?"
              answer="Да, для команд от 5 человек доступны специальные условия. Свяжитесь с нами для деталей."
              data-oid="6mob9ey"
            />
          </div>
        </section>
      </div>

      <BottomNav data-oid="c7jxwqq" />
    </div>
  );
}

// Subscription Plan Component
const SubscriptionPlan = ({ plan }: { plan: (typeof plans)[0] }) => {
  return (
    <ArtDecoCard
      variant={plan.popular ? "elevated" : "default"}
      className="hover:scale-[1.02] transition-transform cursor-pointer relative"
      data-oid="16y02fz"
    >
      {plan.popular && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold px-4 py-1"
          data-oid="58bijnr"
        >
          <span
            className="font-serif text-xs text-navy uppercase tracking-wide font-semibold"
            data-oid="_hz9oly"
          >
            Популярный выбор
          </span>
        </div>
      )}

      <div className="text-center space-y-4" data-oid="h8l2nvz">
        <h3
          className="font-display text-2xl font-bold text-navy"
          data-oid="m91..sn"
        >
          {plan.name}
        </h3>

        <div className="space-y-1" data-oid="otn3.kt">
          <div
            className="flex items-baseline justify-center gap-1"
            data-oid="124zn.-"
          >
            <span
              className="font-display text-4xl font-bold text-gold"
              data-oid="3emuh3s"
            >
              {plan.price}
            </span>
            <span className="font-serif text-navy/60" data-oid="sw_swqt">
              ₽
            </span>
          </div>
          <p className="font-serif text-sm text-navy/60" data-oid="fjtjwgu">
            {plan.period}
          </p>
        </div>

        <p
          className="font-serif text-sm text-navy/70 leading-relaxed px-4"
          data-oid="yh2kley"
        >
          {plan.description}
        </p>

        {plan.savings && (
          <div
            className="inline-block bg-gold/10 px-3 py-1 border border-gold/30"
            data-oid="4yk52xr"
          >
            <span
              className="font-serif text-xs text-gold font-semibold"
              data-oid="ke35xnm"
            >
              {plan.savings}
            </span>
          </div>
        )}

        <button
          className="w-full bg-navy hover:bg-navy/90 text-ivory py-3 px-6 font-display text-sm tracking-luxury uppercase border border-gold/30 transition-all relative group overflow-hidden mt-4"
          data-oid="gbj_x1s"
        >
          <div
            className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
            data-oid="i8bbk7r"
          ></div>
          <span className="relative" data-oid="q4vhtda">
            Оформить подписку
          </span>
        </button>
      </div>
    </ArtDecoCard>
  );
};

// FAQ Item Component
const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-cream border border-navy/10" data-oid="n01qfxs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left group"
        data-oid="vl:-abv"
      >
        <span
          className="font-display text-base font-semibold text-navy group-hover:text-gold transition-colors"
          data-oid="3qm1v7b"
        >
          {question}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`text-gold transition-transform flex-shrink-0 ml-2 ${isOpen ? "rotate-180" : ""}`}
          data-oid="9uuueeb"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-oid="ngwiyqd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="px-4 pb-4" data-oid="zgh4oqj">
          <div
            className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-3"
            data-oid="up0l6rb"
          ></div>
          <p
            className="font-serif text-sm text-navy/70 leading-relaxed"
            data-oid="9i-cvxn"
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};
