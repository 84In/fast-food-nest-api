export class Helper {
  static toSlugFromString = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/đ/g, 'd') //chữ đ không phải dấu nền cần replace
      .normalize('NFD') // tách dấu
      .replace(/[\u0300-\u036f]/g, '') // xóa dấu
      .replace(/[^a-z0-9\s-]/g, '') // xóa ký tự đặc biệt
      .trim()
      .replace(/\s+/g, '-');
  };
}

export default Helper;
