import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../service/produto.service";

@Controller("/produtos")
export class ProdutoController{
    ProdutoRepository: any;
    constructor(private readonly ProdutoService: ProdutoService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]> {
        return this.ProdutoService.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
        return this.ProdutoService.findById(id)
    }

    @Get('/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome:string): Promise<Produto[]> {
        return this.ProdutoService.findByNome(nome)
    }

    @Get('/:preco')
    @HttpCode(HttpStatus.OK)
    findByPreco(@Param('preco') preco: number): Promise<Produto[]> {
        return this.ProdutoService.findByPreco(preco)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() produto: Produto): Promise<Produto> {
        return this.ProdutoService.create(produto)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() produto: Produto): Promise<Produto> {
        return this.ProdutoService.update(produto)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.ProdutoService.delete(id)
    }
}