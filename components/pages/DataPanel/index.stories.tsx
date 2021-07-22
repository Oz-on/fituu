import React from "react";

import DataPanel from './';

export default {
  title: "Components/Pages/DataPanel",
  component: DataPanel,
};

const Template = (args) => <DataPanel {...args} />

export const Default = Template.bind({});
Default.args = {
  userData: {
    fullName: "Janina Kowalska",
    specialization: "Trener personalny",
    categories: "Odchudzanie, modelowanie pośladków",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus at enim id sit at. Placerat pharetra sed ligula id quam aliquam aliquam. Eget in eget massa vitae diam nibh consequat facilisi posuere. Varius nunc tempus leo at sagittis elementum aliquam rhoncus. A laoreet amet risus risus. Arcu, in rhoncus, curabitur iaculis tincidunt cursus. Sed tellus dui volutpat velit. Nec amet egestas sit pulvinar at eu. Vehicula ultricies nunc, pharetra risus pulvinar diam id odio. Odio volutpat dignissim sagittis sit quam. Bibendum accumsan quis placerat."
  },
  offers: [
    {
      name: "Oferta #1",
      price: 200,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus at enim id sit at. Placerat pharetra sed ligula id quam aliquam aliquam. Eget in eget massa vitae diam nibh consequat facilisi posuere. Varius nunc tempus leo at sagittis elementum aliquam rhoncus. A laoreet amet risus risus. Arcu, in rhoncus, curabitur iaculis tincidunt cursus. Sed tellus dui volutpat velit. Nec amet egestas sit pulvinar at eu. Vehicula ultricies nunc, pharetra risus pulvinar diam id odio. Odio volutpat dignissim sagittis sit quam. Bibendum accumsan quis placerat."
    },
    {
      name: "Oferta #2",
      price: 250,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus at enim id sit at. Placerat pharetra sed ligula id quam aliquam aliquam. Eget in eget massa vitae diam nibh consequat facilisi posuere. Varius nunc tempus leo at sagittis elementum aliquam rhoncus. A laoreet amet risus risus. Arcu, in rhoncus, curabitur iaculis tincidunt cursus. Sed tellus dui volutpat velit. Nec amet egestas sit pulvinar at eu. Vehicula ultricies nunc, pharetra risus pulvinar diam id odio. Odio volutpat dignissim sagittis sit quam. Bibendum accumsan quis placerat."
    },
    {
      name: "Oferta #3",
      price: 300,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus at enim id sit at. Placerat pharetra sed ligula id quam aliquam aliquam. Eget in eget massa vitae diam nibh consequat facilisi posuere. Varius nunc tempus leo at sagittis elementum aliquam rhoncus. A laoreet amet risus risus. Arcu, in rhoncus, curabitur iaculis tincidunt cursus. Sed tellus dui volutpat velit. Nec amet egestas sit pulvinar at eu. Vehicula ultricies nunc, pharetra risus pulvinar diam id odio. Odio volutpat dignissim sagittis sit quam. Bibendum accumsan quis placerat."
    }
  ]
};