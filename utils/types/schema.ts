export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Company: {
        Row: {
          country_id: string
          created_at: string
          Externalities: number
          id: number
          industry_id: number | null
          Intensity: number | null
          name: string
        }
        Insert: {
          country_id: string
          created_at?: string
          Externalities?: number
          id?: number
          industry_id?: number | null
          Intensity?: number | null
          name?: string
        }
        Update: {
          country_id?: string
          created_at?: string
          Externalities?: number
          id?: number
          industry_id?: number | null
          Intensity?: number | null
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "Company_country_id_fkey"
            columns: ["country_id"]
            referencedRelation: "Country"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Company_industry_id_fkey"
            columns: ["industry_id"]
            referencedRelation: "Industry"
            referencedColumns: ["id"]
          }
        ]
      }
      Country: {
        Row: {
          created_at: string
          Currency: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          Currency?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          Currency?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      Industry: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
