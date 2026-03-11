"use client";

import dynamic from "next/dynamic";

const EventsShowcase = dynamic(() => import("./EventsShowcase"), {
    ssr: false,
    loading: () => <div className="h-96 w-full animate-pulse bg-gray-100" />
});

const GlobeSection = dynamic(() => import("./GlobeSection"), {
    ssr: false,
    loading: () => <div className="h-96 w-full animate-pulse bg-gray-100" />
});

const TestimonialsGrid = dynamic(() => import("./TestimonialsGrid"), {
    ssr: false,
    loading: () => <div className="h-96 w-full animate-pulse bg-gray-100" />
});

export default function DynamicHomeSections() {
    return (
        <>
            <EventsShowcase />
            <GlobeSection />
            <TestimonialsGrid />
        </>
    );
}
