'use client';

import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormData } from '@/lib/formSchema';
import { Zap, Battery } from 'lucide-react';

interface Step2EnergyProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  watch: any;
}

export default function Step2Energy({ register, errors, watch }: Step2EnergyProps) {
  const annualConsumption = watch('annualConsumption');
  const batteryInterest = watch('batteryInterest');

  const consumptionOptions = [
    { value: 'unter-2000', label: 'Unter 2000 kWh', description: '1-2 Personen' },
    { value: '2000-4000', label: '2000-4000 kWh', description: '2-3 Personen' },
    { value: '4000-6000', label: '4000-6000 kWh', description: '3-4 Personen' },
    { value: 'ueber-6000', label: 'Über 6000 kWh', description: '4+ Personen' },
  ];

  const batteryOptions = [
    { value: 'ja', label: 'Ja, interessiert mich' },
    { value: 'nein', label: 'Nein, danke' },
    { value: 'unsicher', label: 'Bin mir unsicher' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Wie hoch ist Ihr Energiebedarf?
        </h2>
        <p className="text-gray-600">
          Diese Informationen helfen uns, die passende Anlage zu finden
        </p>
      </div>

      <div>
        <label className="label flex items-center gap-2">
          <Zap className="w-5 h-5 text-primary" />
          Jährlicher Stromverbrauch
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {consumptionOptions.map(({ value, label, description }) => (
            <label
              key={value}
              className={`radio-card ${annualConsumption === value ? 'radio-card-selected' : ''}`}
            >
              <input
                type="radio"
                value={value}
                {...register('annualConsumption')}
                className="sr-only"
              />
              <div className="text-center">
                <span className="font-semibold text-gray-900 block">{label}</span>
                <span className="text-sm text-gray-600">{description}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.annualConsumption && (
          <p className="mt-2 text-sm text-red-600">{errors.annualConsumption.message}</p>
        )}
      </div>

      <div>
        <label className="label flex items-center gap-2">
          <Battery className="w-5 h-5 text-primary" />
          Interessieren Sie sich auch für einen Stromspeicher?
        </label>
        <p className="text-sm text-gray-600 mb-4">
          Ein Batteriespeicher erhöht Ihre Unabhängigkeit und maximiert den Eigenverbrauch
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {batteryOptions.map(({ value, label }) => (
            <label
              key={value}
              className={`radio-card ${batteryInterest === value ? 'radio-card-selected' : ''}`}
            >
              <input
                type="radio"
                value={value}
                {...register('batteryInterest')}
                className="sr-only"
              />
              <div className="text-center">
                <span className="font-semibold text-gray-900">{label}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.batteryInterest && (
          <p className="mt-2 text-sm text-red-600">{errors.batteryInterest.message}</p>
        )}
      </div>
    </div>
  );
}
