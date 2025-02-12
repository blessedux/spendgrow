import { Button } from "@/components/ui/button";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="bg-indigo-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Turn Shopping into Ownership
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            SpendGrow is a Stacks-based commerce protocol bridging everyday purchases and ownership. Earn merchant
            tokens and NFT rewards with every transaction.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 