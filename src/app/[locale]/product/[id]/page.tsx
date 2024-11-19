'use client';

import PakegeData from '@/components/Sections/Pakeges/PakegesData';
import { useRouter } from '@/navigation'; // Custom router import
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ProductDetails = () => {
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const pathSegments = window.location.pathname.split('/');
    const id = pathSegments[pathSegments.length - 1]; // Get the last segment, assuming it's the ID

    if (id) {
      const foundProduct = PakegeData.find((item) => item.id === Number(id));
      setProduct(foundProduct);
    }
  }, [router]);

  if (!product) return <p>Product not found</p>;

  return (
    <section className="mt-28">
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 bg-white dark:bg-dark shadow-lg rounded-lg py-14 my-6 content-center items-center">
      <div className="flex items-center justify-center ">
        <Image
          width={0}
          height={0}
          src={product.imgSrc}
          alt={product.title}
          className="rounded-md  bg-[#f0f2f5] shadow-lg w-[70%]"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
        <p className="text-gray-600 mt-2 w-[400px]">
          {product.subtitle}
        </p>
        <div className="text-md  mt-2  w-[400px] py-2">
          {product.desc}
        </div>

        <div className="py-2 flex flex-col gap-2">
        <div className="">
            <span>CATEGORY</span> : {"PKG One"}
        </div>
        <div className="">
            <span>InStok</span> : {"Yes"}
        </div>

        </div>

        
        <p className="text-xl font-semibold text-primary dark:text-yellow mt-4">
          Price: ${product.price.toFixed(2)}
        </p>
        <div className="mt-6">
          <button className="bg-slate-900 p-2 rounded-lg text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ProductDetails;
