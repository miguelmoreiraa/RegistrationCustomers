import prismaClient from "../prisma";

interface DeleteCustomerProps {
  id: string;
}

class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {
    if (!id) {
      throw new Error("Solicitação Inválida");
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: { id: id },
    });

    if (!id) {
      throw new Error("Cliente não existe");
    }

    await prismaClient.customer.delete({
      where: { id: id },
    });

    return { message: "Deletado com sucesso" };
  }
}

export { DeleteCustomerService };
