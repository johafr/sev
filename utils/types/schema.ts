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
      company: {
        Row: {
          country_id: string
          created_at: string
          Externalities: number
          id: string
          industry_id: number | null
          Intensity: number | null
          name: string
        }
        Insert: {
          country_id: string
          created_at?: string
          Externalities?: number
          id?: string
          industry_id?: number | null
          Intensity?: number | null
          name?: string
        }
        Update: {
          country_id?: string
          created_at?: string
          Externalities?: number
          id?: string
          industry_id?: number | null
          Intensity?: number | null
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_country_id_fkey"
            columns: ["country_id"]
            referencedRelation: "country"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_industry_id_fkey"
            columns: ["industry_id"]
            referencedRelation: "industry"
            referencedColumns: ["id"]
          }
        ]
      }
      country: {
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
      industry: {
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
