"use client";

import { QRCodeSVG } from "qrcode.react";
import { getApkQrValue } from "@/lib/site";

type Props = {
  size?: number;
  className?: string;
};

export function ApkQr({ size = 152, className }: Props) {
  return (
    <QRCodeSVG
      value={getApkQrValue()}
      size={size}
      level="M"
      includeMargin={false}
      className={className}
      bgColor="#ffffff"
      fgColor="#064e3b"
    />
  );
}
