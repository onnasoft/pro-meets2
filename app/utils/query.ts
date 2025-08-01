import { FindManyOptions } from "~/types/models";

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
    Object.keys(query.where).forEach((key) => {
      const condition = query.where?.[key];
      if (!condition) return;
      let op = "eq";
      let value: any = condition;
      if (Array.isArray(condition)) {
        op = "in";
      } else if (typeof condition === "object") {
        op = condition.op || "eq";
        value = condition.value;
      } else if (condition === null) {
        op = "[isNull]";
        value = "";
      } else {
        value = condition;
      }
      params.append(`where[${key}][${op}]`, value);
    });
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
