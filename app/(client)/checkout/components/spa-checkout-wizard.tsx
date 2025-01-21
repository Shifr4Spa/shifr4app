"use client";

import { useState, useEffect } from "react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { spaServices, SpaService } from "../data/spa-services";
import { Separator } from "@/components/ui/separator";
import { Check, CreditCard, Calendar, AlertCircle } from "lucide-react";
import Image from "next/image";

const steps = [
  { title: "Reserva tu servicio de SPA", icon: Calendar },
  { title: "Selecciona Método de Pago", icon: CreditCard },
  { title: "Confirmación", icon: Check },
];

export default function SpaCheckoutWizard() {
  const [selectedServices, setSelectedServices] = useState<SpaService[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [total, setTotal] = useState(0);
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    const newTotal = selectedServices.reduce(
      (sum, service) => sum + service.price,
      0
    );
    setTotal(newTotal);
  }, [selectedServices]);

  const handleServiceChange = (serviceIds: string[]) => {
    const services = spaServices.filter((s) =>
      serviceIds.includes(s.id.toString())
    );
    setSelectedServices(services);
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="lg:w-1/2 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="services" className="text-lg font-semibold">
                  Selecciona tus servicios
                </Label>
                <Select
                  onValueChange={(value) => {
                    const service = spaServices.find(
                      (s) => s.id.toString() === value
                    );
                    if (
                      service &&
                      !selectedServices.some((s) => s.id === service.id)
                    ) {
                      setSelectedServices([...selectedServices, service]);
                    }
                  }}
                >
                  <SelectTrigger id="services" className="w-full">
                    <SelectValue>
                      {selectedServices.length > 0
                        ? selectedServices.map((s) => s.name).join(", ")
                        : "Selecciona servicios"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {spaServices
                      .filter(
                        (service) =>
                          !selectedServices.some((s) => s.id === service.id)
                      )
                      .map((service) => (
                        <SelectItem
                          key={service.id}
                          value={service.id.toString()}
                        >
                          {service.name} - ${service.price}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>

                {selectedServices.length > 0 && (
                  <div className="mt-2">
                    {selectedServices.map((service) => (
                      <div
                        key={service.id}
                        className="flex items-center gap-2 mt-2"
                      >
                        <span>{service.name}</span>
                        <button
                          onClick={() =>
                            setSelectedServices(
                              selectedServices.filter(
                                (s) => s.id !== service.id
                              )
                            )
                          }
                          className="text-red-500 text-sm"
                        >
                          Eliminar
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  Servicios seleccionados:
                </h3>
                {selectedServices.map((service, index) => (
                  <Card key={service.id} className="overflow-hidden">
                    <div className="flex items-center p-4">
                      <Image
                        src={service.image}
                        alt={service.name}
                        width={80}
                        height={80}
                        className="rounded-md"
                      />
                      <div className="ml-4 flex-grow">
                        <h4 className="font-semibold">{service.name}</h4>
                        <p className="text-sm text-gray-500">
                          {service.description}
                        </p>
                        <p className="text-sm">Duración: {service.duration}</p>
                      </div>
                      <p className="text-lg font-bold">${service.price}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="bg-primary/5">
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold">
                    Total a pagar: ${total}
                  </h3>
                </CardContent>
              </Card>
            </div>

            <Separator orientation="vertical" className="hidden lg:block" />

            <div className="lg:w-1/2 space-y-6 mt-6 lg:mt-0">
              <h3 className="text-lg font-semibold">Detalles de la reserva</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Fecha de reserva</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Hora de reserva</Label>
                  <Input id="time" type="time" />
                </div>
              </div>

              <Card className="bg-yellow-50">
                <CardContent className="p-4 space-y-4">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-700">
                        Términos y Condiciones
                      </h4>
                      <p className="text-sm text-yellow-600">
                        Al aceptar, reconoces que has leído y estás de acuerdo
                        con nuestros términos y condiciones, incluyendo la
                        política de cancelación que establece un cargo del 50%
                        del total en caso de cancelación.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={termsAccepted}
                      onCheckedChange={(checked) =>
                        setTermsAccepted(checked as boolean)
                      }
                    />
                    <Label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Acepto los términos y condiciones
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="lg:w-1/2 space-y-6">
              <h3 className="text-lg font-semibold">Método de pago</h3>
              <RadioGroup
                onValueChange={setPaymentMethod}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2 rounded-lg border p-4">
                  <RadioGroupItem value="credit_card" id="credit_card" />
                  <Label htmlFor="credit_card" className="flex-grow">
                    Tarjeta de Crédito
                  </Label>
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex items-center space-x-2 rounded-lg border p-4">
                  <RadioGroupItem value="debit_card" id="debit_card" />
                  <Label htmlFor="debit_card" className="flex-grow">
                    Tarjeta de Débito
                  </Label>
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex items-center space-x-2 rounded-lg border p-4">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal" className="flex-grow">
                    PayPal
                  </Label>
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="PayPal"
                    width={20}
                    height={20}
                  />
                </div>
              </RadioGroup>
              {paymentMethod && (
                <Card className="mt-4">
                  <CardContent className="p-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="card_number">Número de Tarjeta</Label>
                      <Input
                        id="card_number"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="expiry">Fecha de Expiración</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <Separator orientation="vertical" className="hidden lg:block" />

            <div className="lg:w-1/2 space-y-6 mt-6 lg:mt-0">
              <h3 className="text-lg font-semibold">Resumen de tu reserva</h3>
              <Card className="bg-primary/5">
                <CardContent className="p-4 space-y-4">
                  {selectedServices.map((service, index) => (
                    <div
                      key={service.id}
                      className="flex justify-between items-center"
                    >
                      <div>
                        <h4 className="font-semibold">{service.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          Duración: {service.duration}
                        </p>
                      </div>
                      <p className="text-lg font-bold">${service.price}</p>
                    </div>
                  ))}
                  <Separator />
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Total a pagar:</h3>
                    <p className="text-xl font-bold">${total}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-green-600">
              ¡Tu reserva ha sido generada exitosamente!
            </h3>
            <p className="text-muted-foreground">
              Hemos enviado un correo electrónico con los detalles de tu
              reserva.
            </p>
            <p className="text-lg font-semibold">
              Número de confirmación:{" "}
              {Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
            <Card className="mt-6 bg-primary/5">
              <CardHeader>
                <CardTitle>Resumen de tu reserva</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedServices.map((service, index) => (
                  <div
                    key={service.id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-semibold">{service.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Duración: {service.duration}
                      </p>
                    </div>
                    <p className="text-lg font-bold">${service.price}</p>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Total pagado:</h3>
                  <p className="text-xl font-bold">${total}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-5xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Reserva de Servicios de Spa</CardTitle>
        <div className="flex items-center justify-between mt-4">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index <= currentStep
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {React.createElement(step.icon, { className: "h-5 w-5" })}
                </div>
                <p
                  className={`text-sm mt-2 ${
                    index <= currentStep
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.title}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 bg-muted relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-primary transition-all duration-500 ease-in-out"
                    style={{ width: index < currentStep ? "100%" : "0%" }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-6">{renderStep()}</CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={handlePreviousStep}
          disabled={currentStep === 0}
          variant="outline"
        >
          Anterior
        </Button>
        <Button
          onClick={handleNextStep}
          disabled={
            currentStep === steps.length - 1 ||
            (currentStep === 0 &&
              (selectedServices.length === 0 || !termsAccepted)) ||
            (currentStep === 1 && !paymentMethod)
          }
        >
          {currentStep === steps.length - 2 ? "Confirmar Reserva" : "Siguiente"}
        </Button>
      </CardFooter>
    </Card>
  );
}
