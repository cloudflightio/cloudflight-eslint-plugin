declare function Inject(token: string): ParameterDecorator;

export class Service {
    public constructor(@Inject('token') private readonly token: string,
                       private readonly plain: string) {}
}
