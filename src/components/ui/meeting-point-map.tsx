import { ArrowUpRight } from "lucide-react";
import { MEETING_POINT } from "@/lib/meeting-point";

export function MeetingPointMap({
  className = "",
  showCta = false,
}: {
  className?: string;
  showCta?: boolean;
}) {
  return (
    <a
      href={MEETING_POINT.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`meeting-point-map ${className}`.trim()}
      aria-label={`Open meeting point in Google Maps — ${MEETING_POINT.address}`}
    >
      <iframe
        src={MEETING_POINT.embedUrl}
        title=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        tabIndex={-1}
      />
      {showCta && (
        <span className="meeting-point-map__cta">
          View on Google Maps
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      )}
    </a>
  );
}

export function MeetingPointCard({ className = "" }: { className?: string }) {
  return (
    <a
      href={MEETING_POINT.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`footer-v2__location-card ${className}`.trim()}
      aria-label={`Open meeting point in Google Maps — ${MEETING_POINT.address}`}
    >
      <div className="footer-v2__location-map" aria-hidden>
        <iframe
          src={MEETING_POINT.embedUrl}
          title=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          tabIndex={-1}
        />
      </div>
      <div className="footer-v2__location-body">
        <p className="footer-v2__location-title">{MEETING_POINT.title}</p>
        <p className="footer-v2__location-address">{MEETING_POINT.address}</p>
        <p className="footer-v2__location-note">{MEETING_POINT.note}</p>
        <span className="footer-v2__location-cta">
          View on Google Maps
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      </div>
    </a>
  );
}
