import { useLocation } from "react-router-dom";

// hook proporcionado por react-router-dom que devuelve el objeto de ubicación que representa la URL actual.

export function useQuery() { return new URLSearchParams(useLocation().search);}