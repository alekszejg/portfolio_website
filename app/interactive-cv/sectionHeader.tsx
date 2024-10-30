type SectionHeaderProps = {headerWrapperClass: string, iconClass: string, icon: string, headerClass: string, header: string};

export default function SectionHeader(props: SectionHeaderProps) {
    const { headerWrapperClass, iconClass, icon, headerClass, header } = props;
   
    return (
        <div className={headerWrapperClass}>
            <img className={iconClass} src={icon} alt="" />
            <h2 className={headerClass}>{header}</h2>
        </div> 
    );
}