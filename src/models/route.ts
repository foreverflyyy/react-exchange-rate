import React from "react";

export interface Route {
   path: string,
   name: string,
   component: React.FC,
}