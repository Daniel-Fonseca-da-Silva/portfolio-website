import { useState, FormEvent, ChangeEvent, useRef, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  turnstile?: string;
}

declare global {
  interface Window {
    turnstile?: {
      render: (element: string | HTMLElement, options: {
        sitekey: string;
        callback?: (token: string) => void;
        'error-callback'?: () => void;
        'expired-callback'?: () => void;
      }) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    
    if (!siteKey) {
      console.error('NEXT_PUBLIC_TURNSTILE_SITE_KEY is not configured');
      return;
    }

    const loadTurnstile = () => {
      if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: siteKey,
          callback: (token: string) => {
            setTurnstileToken(token);
            if (errors.turnstile) {
              setErrors(prev => ({
                ...prev,
                turnstile: undefined,
              }));
            }
          },
          'error-callback': () => {
            setTurnstileToken('');
            setErrors(prev => ({
              ...prev,
              turnstile: 'Error loading verification. Please refresh the page.',
            }));
          },
          'expired-callback': () => {
            setTurnstileToken('');
            setErrors(prev => ({
              ...prev,
              turnstile: 'Verification expired. Please verify again.',
            }));
          },
        });
      }
    };

    if (window.turnstile) {
      loadTurnstile();
    } else {
      const checkTurnstile = setInterval(() => {
        if (window.turnstile) {
          loadTurnstile();
          clearInterval(checkTurnstile);
        }
      }, 100);

      return () => clearInterval(checkTurnstile);
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [errors.turnstile]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!turnstileToken) {
      newErrors.turnstile = 'Please complete the verification';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const resetTurnstile = () => {
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
      setTurnstileToken('');
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error:', errorData);
        throw new Error(errorData.error || 'Error sending message');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
      });
      resetTurnstile();
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus('error');
      resetTurnstile();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-8 sm:py-10 md:py-16 xl:py-32 flex flex-col gap-3 sm:gap-4 items-center justify-center px-4 sm:px-6"
    >
      <p className="font-titleFont text-base sm:text-lg md:text-xl text-textGreen font-semibold flex items-center tracking-wide mb-2">
        04. Next steps?
      </p>
      <h2 className="font-titleFont text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 sm:mb-6">
        <span className="gradient-text">Contact me</span>
      </h2>
      <p className="max-w-[700px] text-center text-base sm:text-lg text-textDark leading-relaxed mb-8 sm:mb-10">
        Deliver exceptional software solutions tailored to your business needs. 
        Let&apos;s transform your digital infrastructure together.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-[600px] flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-titleFont text-sm text-textLight">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-[#112240] border ${
              errors.name ? 'border-red-500' : 'border-textGreen/20'
            } text-textLight focus:outline-none focus:border-textGreen transition-colors`}
            placeholder="Your name"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-titleFont text-sm text-textLight">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-[#112240] border ${
              errors.email ? 'border-red-500' : 'border-textGreen/20'
            } text-textLight focus:outline-none focus:border-textGreen transition-colors`}
            placeholder="your@email.com"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="font-titleFont text-sm text-textLight">
            Subject
          </label>
          <textarea
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 rounded-lg bg-[#112240] border ${
              errors.subject ? 'border-red-500' : 'border-textGreen/20'
            } text-textLight focus:outline-none focus:border-textGreen transition-colors resize-none`}
            placeholder="Describe the subject of your message..."
          />
          {errors.subject && (
            <span className="text-red-500 text-sm">{errors.subject}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <div ref={turnstileRef} className="flex justify-center" />
          {errors.turnstile && (
            <span className="text-red-500 text-sm text-center">{errors.turnstile}</span>
          )}
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/50 text-green-500 text-center">
            Message sent successfully!
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-500 text-center">
            Error sending message. Try again.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-14 sm:h-16 border-2 border-textGreen mt-4 font-titleFont text-sm sm:text-base text-textGreen tracking-wider rounded-lg hover:bg-hoverColor duration-300 transition-all glow-green-hover font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>
      </form>

      <div className="mt-8">
        <p className="text-textDark text-center mb-4">Or contact me via WhatsApp:</p>
        <a href="https://wa.me/351913619053" target="_blank" className="group">
          <button className="w-full sm:w-56 h-14 sm:h-16 border-2 border-textGreen font-titleFont text-sm sm:text-base text-textGreen tracking-wider rounded-lg hover:bg-hoverColor duration-300 transition-all glow-green-hover font-semibold flex items-center justify-center gap-2">
            <span>WhatsApp</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default ContactForm;
