'use client'
import { useState, useEffect } from "react";

export default function ConnectionWarning() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        function handleOnline() {
            setIsOnline(true);
        }
        function handleOffline() {
            setIsOnline(false);
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return !isOnline ? (
        <div className="
            flex justify-center items-center
            w-full h-7
            bg-gradient-to-r from-red-500 via-red-600 to-red-500
            text-gray-50 text-sm lg:text-base
        ">
            Disconnected...
        </div>
    ) : null
}