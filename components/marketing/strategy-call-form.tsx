"use client";

import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox, FieldLabel, Input, Select, Textarea } from "@/components/ui/form";

export function StrategyCallForm() {
  return (
    <Section id="form" className="bg-bg-2/25">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted">
            Strategy call request
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Tell us where you want pipeline to be
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted sm:text-base">
            This helps us show up prepared — with context, relevant ideas, and a
            clear next step.
          </p>
        </div>

        <div className="lg:col-span-7">
          <Card className="p-7 sm:p-8">
            <form className="grid gap-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                  <Input id="fullName" name="fullName" autoComplete="name" />
                </div>
                <div>
                  <FieldLabel htmlFor="workEmail">Work Email</FieldLabel>
                  <Input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <FieldLabel htmlFor="companyName">Company Name</FieldLabel>
                  <Input id="companyName" name="companyName" />
                </div>
                <div>
                  <FieldLabel htmlFor="companyWebsite">Company Website</FieldLabel>
                  <Input
                    id="companyWebsite"
                    name="companyWebsite"
                    placeholder="https://"
                    inputMode="url"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <FieldLabel htmlFor="teamSize">Team Size</FieldLabel>
                  <Select id="teamSize" name="teamSize" defaultValue="">
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="1-10">1–10</option>
                    <option value="11-25">11–25</option>
                    <option value="26-50">26–50</option>
                    <option value="51-100">51–100</option>
                    <option value="100+">100+</option>
                  </Select>
                </div>
                <div>
                  <FieldLabel htmlFor="service">Service of Interest</FieldLabel>
                  <Select id="service" name="service" defaultValue="">
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="lead-generation">Lead Generation</option>
                    <option value="sales-outsourcing">Sales Outsourcing</option>
                    <option value="marketing-automation">Marketing Automation</option>
                    <option value="not-sure">Not sure yet</option>
                  </Select>
                </div>
              </div>

              <div>
                <FieldLabel htmlFor="goal">Monthly Lead / Pipeline Goal</FieldLabel>
                <Input id="goal" name="goal" placeholder="e.g. 20 qualified meetings / month" />
              </div>

              <div>
                <FieldLabel htmlFor="challenge">Current Challenge</FieldLabel>
                <Textarea
                  id="challenge"
                  name="challenge"
                  placeholder="Where does pipeline feel inconsistent right now?"
                />
              </div>

              <div>
                <FieldLabel htmlFor="details">Additional Details</FieldLabel>
                <Textarea
                  id="details"
                  name="details"
                  placeholder="Anything else we should know (industry, ACV, current motion, tooling)?"
                />
              </div>

              <label className="flex items-start gap-3">
                <Checkbox name="consent" />
                <span className="text-sm leading-6 text-muted">
                  I agree to be contacted about my inquiry
                </span>
              </label>

              <div className="grid gap-3">
                <Button type="button" size="lg">
                  Request Strategy Call
                </Button>
                <p className="text-sm text-muted">We typically respond within 1 business day.</p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </Section>
  );
}
