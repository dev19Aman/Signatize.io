import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CgCopyright } from "react-icons/cg";
import is from "is_js";

export default function Footer() {
  useEffect(() => {}, []);
  return (
    <>
      <footer>
        <section className="bg-black flex h-14 items-center justify-center">
          <div className="flex text-white gap-2 items-center">
            <h1 className="font-bold text-xl">Signatize</h1>
            <CgCopyright fontSize="25" />
            <span className="text-lg">2021</span>
          </div>
        </section>
      </footer>
    </>
  );
}
