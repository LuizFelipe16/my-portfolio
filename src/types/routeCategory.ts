import { NextRouter } from "next/router";
import type { ParsedUrlQuery } from "querystring";

type Category = 'programacao' | 'design';

interface Query extends ParsedUrlQuery {
  category: Category;
};

export interface RouterCategories extends NextRouter {
  query: Query;
}