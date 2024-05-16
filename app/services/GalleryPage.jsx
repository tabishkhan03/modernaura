"use client";
import { useState } from "react";
import React from "react";
import { Dialog, DialogBody, Card, Button } from "@material-tailwind/react";
const GalleryPage = () => {
  const data = [
    {
      imageLink: "/IMG-20240508-WA0014.jpg",
    },
    {
      imageLink: "/IMG-20240508-WA0015.jpg",
    },
    {
      imageLink: "/IMG-20240508-WA0016.jpg",
    },
    {
      imageLink: "/IMG-20240508-WA0017.jpg",
    },
    {
      imageLink: "/IMG-20240508-WA0018.jpg",
    },
    {
      imageLink: "/IMG-20240508-WA0019.jpg",
    },
  ];
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleOpen = (index) => {
    setOpen(true);
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <section class="py-24 ">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div class="grid gap-2.5 lg:pb-16 pb-10">
            <h2 class="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Our Gallery
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {data.map(({ imageLink }, index) => (
              <Card
                key={index}
                className="h-64 w-96 cursor-pointer overflow-hidden  transition-opacity hover:opacity-90"
                onClick={() => handleOpen(index)}
              >
                <img
                  alt="nature"
                  className="h-full w-full object-cover object-center grayscale transition-all duration-700 ease-in-out hover:grayscale-0"
                  src={imageLink}
                />
              </Card>
            ))}
          </div>

          <Dialog size="xl" open={open} handler={handleClose}>
            <DialogBody className="item-center">
              <Button className="text-black mb-2" onClick={handleClose}>
                Close
              </Button>
              <img
                alt="nature"
                className="h-[48rem] mb w-full rounded-lg object-cover object-center"
                src={data[selectedImageIndex].imageLink}
              />
            </DialogBody>
          </Dialog>
        </div>
      </section>
    </>
  );
};


export default GalleryPage;
