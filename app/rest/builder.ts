import { Condition } from "./condition";
import { FindManyOptions, WhereOptions } from "./query";

function parseWhereParams<T>(
  where: WhereOptions<T>,
  parentKey = "where"
): URLSearchParams {
  const params = new URLSearchParams();

  const walk = (obj: any, path: string[]) => {
    for (const key in obj) {
      const value = obj[key];
      if (value === null || value === undefined) continue;

      const currentPath = [...path, key];

      if (isCondition(value)) {
        const op = value.op ?? "eq";
        const joinedKey = `${parentKey}[${currentPath.join(".")}][${op}]`;
        const val =
          Array.isArray(value.value) && ["between", "in"].includes(op)
            ? value.value.join(",")
            : String(value.value);
        params.append(joinedKey, val);
      } else if (["string", "number", "boolean"].includes(typeof value)) {
        const op = "eq";
        const joinedKey = `${parentKey}[${currentPath.join(".")}][${op}]`;
        params.append(joinedKey, String(value));
      } else if (typeof value === "object" && !Array.isArray(value)) {
        walk(value, currentPath);
      }
    }
  };

  const isCondition = (v: any): v is Condition<any> =>
    typeof v === "object" &&
    "value" in v &&
    (typeof v.value !== "object" || Array.isArray(v.value));

  walk(where, []);
  return params;
}

export function queryBuilder(query: FindManyOptions<any>) {
  const params = new URLSearchParams();

  if (query.select) {
    Object.keys(query.select).forEach((key) => {
      if (query.select?.[key]) {
        params.append(`select[${key}]`, String(query.select[key]));
      }
    });
  }

  if (query.where) {
    const whereParams = parseWhereParams(query.where);
    for (const [key, value] of whereParams.entries()) {
      params.append(key, value);
    }
  }

  if (query.relations) {
    params.append("relations", query.relations.join(","));
  }

  if (query.orderBy) {
    const order = query.orderBy
      .map((order) => {
        const key = Object.keys(order)[0];
        const direction = order[key];
        return `${key}:${direction}`;
      })
      .join(",");
    params.append("order", order);
  }

  if (query.take) {
    params.append("take", String(query.take));
  }

  if (query.skip) {
    params.append("skip", String(query.skip));
  }

  return params.toString();
}
